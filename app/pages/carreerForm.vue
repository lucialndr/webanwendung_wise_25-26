<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
    <div class="max-w-3xl mx-auto">
      
      <div v-if="submitSuccess" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p class="text-green-800 font-medium">✓ Bewerbung erfolgreich eingereicht!</p>
        <p class="text-green-600 text-sm mt-1">Sie werden weitergeleitet...</p>
      </div>
      
      <div v-if="submitError" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-800 font-medium">✗ {{ submitError }}</p>
      </div>
      
      <div class="text-center mb-8">
        <p class="text-gray-600 mb-2">Schritt {{ currentSlide }} von 3</p>
        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div 
            :style="{ width: (currentSlide / 3 * 100) + '%' }" 
            class="bg-stone-800 h-2 rounded-full transition-all"
          />
        </div>
      </div>
      
      <!-- Slides -->
      <Slide1ContactDetails
        v-if="currentSlide === 1"
        v-model="formData"
        :selectedJob="selectedJob"
        @next="goToNextSlide"
        @goBack="goBackToJob"
      />
      
      <Slide2Qualifications
        v-if="currentSlide === 2"
        v-model="formData"
        @next="goToNextSlide"
        @prev="goToPrevSlide"
      />
      
      <Slide3Uploads
      v-if="currentSlide === 3"
      v-model="formData"
      :is-submitting="isSubmitting"
      :submit-error="submitError"
      @prev="goToPrevSlide"
      @submit="submitForm"
    />
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, watch, onMounted } from 'vue'
  
  const router = useRouter()
  const currentSlide = ref(1)
  const selectedJob = ref(null)
  const isSubmitting = ref(false)
  const submitError = ref(null)
  const submitSuccess = ref(false)
  
  // Daten aus dem Formular
  const formData = reactive({
    geschlecht: '',
    name: '',
    street: '',
    city: '',
    tel_number: '',
    mail: '',
    birth_date: '',
    abschluss: '',
    berufserfahrung: '',
    sprachen: '',
    verfuegbarkeit: '',
    schichtbereitschaft: [],
    fuehrerschein: '',
    fuehrerschein_klasse: '',
    it_kenntnisse: [],
    zertifikate: [],
    gehaltsvorstellung: '',
    motivation: '',
    lebenslauf: null,
    anschreiben: null,
    zertifikate_upload: null,
    newsletter: false,
    datenschutz: false
  })
  
  watch(formData, (newValue) => {
    const dataToStore = { ...newValue }
    delete dataToStore.lebenslauf
    delete dataToStore.anschreiben
    delete dataToStore.zertifikate_upload
    
    sessionStorage.setItem('formData', JSON.stringify(dataToStore))
  }, { deep: true })
  
  onMounted(() => {
    const stored = sessionStorage.getItem('selectedJob')
    if (stored) {
      try {
        selectedJob.value = JSON.parse(stored)
      } catch (e) {
        console.error('Es gibt einen Fehler beim Laden der Job Daten:', e)
      }
    }
    
    const savedFormData = sessionStorage.getItem('formData')
    if (savedFormData) {
      try {
        const data = JSON.parse(savedFormData)
        Object.assign(formData, data)
      } catch (e) {
        console.error('Es gibt einen  Fehler beim Laden der Formular-Daten:', e)
      }
    }
  })
  
  const goToNextSlide = () => {
    if (currentSlide.value < 3) {
      currentSlide.value++
    }
  }
  
  const goToPrevSlide = () => {
    if (currentSlide.value > 1) {
      currentSlide.value--
    }
  }
  
  const goBackToJob = () => {
    if (selectedJob.value?.slug) {
      router.push(`/jobs/${selectedJob.value.slug}`)
    }
  }
  
  const submitForm = async () => {
    isSubmitting.value = true
    submitError.value = null
    
    try {
      if (!formData.datenschutz) {
        throw new Error('Bitte akzeptieren Sie die Datenschutzerklärung')
      }
      
      if (!formData.name || !formData.mail) {
        throw new Error('Bitte füllen Sie alle Pflichtfelder aus')
      }
      
      const data = new FormData()
      
      Object.keys(formData).forEach(key => {
        if (!['lebenslauf', 'anschreiben', 'zertifikate_upload'].includes(key)) {
          const value = formData[key]
          
          if (Array.isArray(value)) {
            data.append(key, JSON.stringify(value))
          } else if (typeof value === 'boolean') {
            data.append(key, String(value))
          } else if (value !== null && value !== undefined) {
            data.append(key, String(value))
          }
        }
      })
      
      if (selectedJob.value) {
        data.append('job_slug', selectedJob.value.slug || '')
        data.append('job_title', selectedJob.value.title || '')
      }
      
      if (formData.lebenslauf) {
        data.append('lebenslauf', formData.lebenslauf)
      }
      if (formData.anschreiben) {
        data.append('anschreiben', formData.anschreiben)
      }
      if (formData.zertifikate_upload) {
        data.append('zertifikate_upload', formData.zertifikate_upload)
      }
      
      const response = await $fetch('/api/bewerbung', {
        method: 'POST',
        body: data
      })
      
      if (response.success) {
        submitSuccess.value = true
        
        sessionStorage.removeItem('formData')
        sessionStorage.removeItem('selectedJob')
        
        setTimeout(() => {
          router.push('/bewerbung_erfolg')
        }, 1500)
      }
      
    } catch (error) {
      console.error('Es gibt einen Fehler beim Absenden:', error)
      submitError.value = error.data?.message || error.message || 'Ein Fehler ist aufgetreten'
    } finally {
      isSubmitting.value = false
    }
  }
  </script>