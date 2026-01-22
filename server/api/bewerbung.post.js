import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event)
    
    // Prüfen ob Config vorhanden
    if (!config.public.supabaseUrl || !config.public.supabaseAnonKey) {
      throw createError({
        statusCode: 500,
        message: 'Supabase Konfiguration fehlt'
      })
    }
    
    const supabase = createClient(
      config.public.supabaseUrl,
      config.public.supabaseAnonKey
    )

    // FormData empfangen
    const formData = await readMultipartFormData(event)
    
    if (!formData) {
      throw createError({
        statusCode: 400,
        message: 'Keine Daten erhalten'
      })
    }

    // Daten und Dateien extrahieren
    const data = {}
    const files = {}
    
    formData.forEach(item => {
      if (item.filename) {
        // Es ist eine Datei
        files[item.name || ''] = item
      } else {
        // Es ist ein normales Feld
        const value = item.data.toString('utf-8')
        const fieldName = item.name || ''
        
        // Arrays parsen
        if (['schichtbereitschaft', 'it_kenntnisse', 'zertifikate'].includes(fieldName)) {
          try {
            data[fieldName] = JSON.parse(value)
          } catch {
            data[fieldName] = []
          }
        } else if (['newsletter', 'datenschutz'].includes(fieldName)) {
          data[fieldName] = value === 'true'
        } else {
          data[fieldName] = value
        }
      }
    })

    // Validierung
    if (!data.datenschutz) {
      throw createError({
        statusCode: 400,
        message: 'Datenschutzerklärung muss akzeptiert werden'
      })
    }

    if (!data.name || !data.mail) {
      throw createError({
        statusCode: 400,
        message: 'Name und E-Mail sind Pflichtfelder'
      })
    }

    // E-Mail validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.mail)) {
      throw createError({
        statusCode: 400,
        message: 'Ungültige E-Mail-Adresse'
      })
    }

    // Dateigröße validieren (max 5MB pro Datei)
    const maxSize = 5 * 1024 * 1024 // 5MB
    for (const [fieldName, file] of Object.entries(files)) {
      if (file.data && file.data.length > maxSize) {
        throw createError({
          statusCode: 400,
          message: `Datei ${file.filename} ist zu groß (max. 5MB)`
        })
      }
    }

    // Erlaubte Dateitypen
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png'
    ]

    for (const [fieldName, file] of Object.entries(files)) {
      if (file.type && !allowedTypes.includes(file.type)) {
        throw createError({
          statusCode: 400,
          message: `Dateityp ${file.type} ist nicht erlaubt. Nur PDF, Word, JPG und PNG sind erlaubt.`
        })
      }
    }

    // Dateien hochladen
    const uploadedFiles = {}
    const uploadPromises = []

    for (const [fieldName, file] of Object.entries(files)) {
      if (file && file.data) {
        // Sicherer Dateiname
        const timestamp = Date.now()
        const safeName = (file.filename || 'file').replace(/[^a-zA-Z0-9.-]/g, '_')
        const fileName = `${timestamp}_${safeName}`
        const filePath = `${data.mail}/${fileName}`

        const uploadPromise = supabase.storage
          .from('bewerbungsunterlagen')
          .upload(filePath, file.data, {
            contentType: file.type,
            upsert: false
          })
          .then(({ data: uploadData, error }) => {
            if (error) {
              console.error('Upload-Fehler:', error)
              throw error
            }
            uploadedFiles[`${fieldName}_url`] = filePath
          })

        uploadPromises.push(uploadPromise)
      }
    }

    // Warte auf alle Uploads
    await Promise.all(uploadPromises)

    // Bewerbung in DB speichern
    const { data: bewerbung, error: dbError } = await supabase
      .from('bewerbungen')
      .insert([{
        geschlecht: data.geschlecht || null,
        name: data.name,
        street: data.street || null,
        city: data.city || null,
        tel_number: data.tel_number || null,
        mail: data.mail,
        birth_date: data.birth_date || null,
        abschluss: data.abschluss || null,
        berufserfahrung: data.berufserfahrung || null,
        sprachen: data.sprachen || null,
        verfuegbarkeit: data.verfuegbarkeit || null,
        schichtbereitschaft: data.schichtbereitschaft || [],
        fuehrerschein: data.fuehrerschein || null,
        fuehrerschein_klasse: data.fuehrerschein_klasse || null,
        it_kenntnisse: data.it_kenntnisse || [],
        zertifikate: data.zertifikate || [],
        gehaltsvorstellung: data.gehaltsvorstellung || null,
        motivation: data.motivation || null,
        job_slug: data.job_slug || null,
        job_title: data.job_title || null,
        newsletter: data.newsletter || false,
        datenschutz: data.datenschutz,
        ...uploadedFiles
      }])
      

    if (dbError) {
      console.error('DB-Fehler:', dbError)
      
      // Bei Fehler: Hochgeladene Dateien wieder löschen
      const deletePromises = Object.values(uploadedFiles).map(filePath =>
        supabase.storage
          .from('bewerbungsunterlagen')
          .remove([filePath])
      )
      await Promise.all(deletePromises)
      
      throw createError({
        statusCode: 500,
        message: 'Fehler beim Speichern in der Datenbank'
      })
    }

    return {
      success: true,
      message: 'Bewerbung erfolgreich eingereicht',
    }

  } catch (error) {
    console.error('Fehler beim Speichern der Bewerbung:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Fehler beim Speichern der Bewerbung'
    })
  }
})