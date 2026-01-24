<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div class="max-w-3xl mx-auto">
        
        <!-- Header -->
        <header class="text-center mb-10">
          <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">
            Hotel Excellence
          </h1>
          <p class="text-xl text-gray-600">Bewerbungsformular</p>
          <div class="w-24 h-1 bg-gray-800 mx-auto mt-4"></div>
        </header>

        <!-- Job-Info aus sessionStorage -->
        <div v-if="selectedJob" class="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex justify-between items-start gap-4">
            <div>
              <p class="text-sm text-gray-600 mb-1">Bewerbung für:</p>
              <h2 class="text-2xl font-bold text-gray-900">{{ selectedJob.title }}</h2>
              <p class="text-sm text-gray-600 mt-2">Abteilung: {{ selectedJob.department }}</p>
            </div>
            <button
              @click="goBackToJob"
              class="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              ← Zurück zur Stellenbeschreibung
            </button>
          </div>
        </div>
  
        <!-- Formular -->
        <form action="antwort_formular.php" method="post" class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          
          <!-- Name -->
          <div class="mb-6">
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input 
              v-model="formData.name"
              type="text" 
              id="name" 
              name="nn" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              placeholder="Mustermann, Max" 
              maxlength="40"
              required
            >
          </div>
  
          <!-- Straße -->
          <div class="mb-6">
            <label for="street" class="block text-sm font-semibold text-gray-700 mb-2">
              Straße
            </label>
            <input 
              v-model="formData.street"
              type="text" 
              id="street" 
              name="street" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              placeholder="Musterstraße 123" 
              maxlength="40"
            >
          </div>
  
          <!-- Ort und PLZ -->
          <div class="mb-6">
            <label for="city" class="block text-sm font-semibold text-gray-700 mb-2">
              PLZ, Ort
            </label>
            <input 
              v-model="formData.city"
              type="text" 
              id="city" 
              name="city" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              placeholder="22222 Musterstadt" 
              maxlength="40"
            >
          </div>
  
          <!--  Telefon und Email -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            <!-- Telefonnummer -->
            <div>
              <label for="telp" class="block text-sm font-semibold text-gray-700 mb-2">
                Telefon / Mobil *
              </label>
              <input 
                v-model="formData.tel_number"
                type="tel" 
                id="telp" 
                name="tel_number" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
                placeholder="+49 172 6629675" 
                maxlength="40"
                required
              >
            </div>
  
            <!-- Email -->
            <div>
              <label for="em" class="block text-sm font-semibold text-gray-700 mb-2">
                E-Mail *
              </label>
              <input 
                v-model="formData.mail"
                type="email" 
                id="em" 
                name="mail" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
                placeholder="max@beispiel.de"
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" 
                maxlength="40"
                required
              >
            </div>
          </div>
  
          <!-- Geburtsdatum -->
          <div class="mb-6">
            <label for="da" class="block text-sm font-semibold text-gray-700 mb-2">
              Geburtsdatum
            </label>
            <input 
              v-model="formData.birth_date"
              type="date" 
              id="da" 
              name="birth_date" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
            >
          </div>
  
          <!-- Stelle auswählen -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 mb-3">
              Angestrebte Stelle *
            </label>
            
            <div class="space-y-3">
              <label class="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input 
                  v-model="formData.stelle"
                  type="radio" 
                  name="stelle" 
                  value="Praktikum" 
                  class="w-4 h-4 text-gray-800 focus:ring-gray-800"
                  required
                >
                <span class="ml-3 text-gray-700">Praktikum</span>
              </label>
  
              <label class="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input 
                  v-model="formData.stelle"
                  type="radio" 
                  name="stelle" 
                  value="Mini-Job" 
                  class="w-4 h-4 text-gray-800 focus:ring-gray-800"
                >
                <span class="ml-3 text-gray-700">Mini-Job</span>
              </label>
  
              <label class="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input 
                  v-model="formData.stelle"
                  type="radio" 
                  name="stelle" 
                  value="Vollzeit_Stelle" 
                  class="w-4 h-4 text-gray-800 focus:ring-gray-800"
                >
                <span class="ml-3 text-gray-700">Vollzeit Stelle</span>
              </label>
            </div>
          </div>
  
          <!-- Geschlecht -->
        <p>Geschlecht:</p>
        <p>
            <input v-model="formData.geschlecht" type="radio" name="geschlecht" id="r1" value="m">
            <label for="r1"> Männlich</label><br>
            <input v-model="formData.geschlecht" type="radio" name="geschlecht" id="r2" value="w">
            <label for="r2"> Weiblich</label><br>
            <input v-model="formData.geschlecht" type="radio" name="geschlecht" id="r3" value="d">
            <label for="r3"> Divers</label>
        </p>

          <!-- Newsletter -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 mb-3">
              Newsletter zu Jobangeboten
            </label>
            
            <label class="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input 
                v-model="formData.newsletter"
                type="checkbox" 
                name="newsletter" 
                value="Ja" 
                class="w-4 h-4 text-gray-800 rounded focus:ring-gray-800"
              >
              <span class="ml-3 text-gray-700">Ja, ich möchte interessante Jobangebote erhalten</span>
            </label>
          </div>
  
          <!-- Motivationsschreiben -->
          <div class="mb-8">
            <label for="txt" class="block text-sm font-semibold text-gray-700 mb-2">
              Ihr Motivationsschreiben *
            </label>
            <textarea 
              v-model="formData.txt"
              name="txt" 
              id="txt" 
              rows="8" 
              maxlength="2500"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition resize-none"
              placeholder="Erzählen Sie uns, warum Sie Teil unseres Teams werden möchten..."
              required
            ></textarea>
            <p class="text-sm text-gray-500 mt-2">Maximal 2500 Zeichen</p>
          </div>
  
          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              type="submit" 
              class="flex-1 bg-stone-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Bewerbung absenden
            </button>
            <button 
              type="reset" 
              class="flex-1 bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Zurücksetzen
            </button>
          </div>
  
          <p class="text-sm text-gray-500 text-center mt-6">
            * Pflichtfelder
          </p>
  
        </form>
  
        <!-- Footer Text -->
        <div class="text-center mt-8 text-gray-600">
          <p>Wir freuen uns auf Ihre Bewerbung!</p>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>

    import { ref, onMounted, watch, reactive } from 'vue'
    import { useRouter } from 'nuxt/app'

    const router = useRouter()
    const selectedJob = ref(null)

    // Reaktives Objekt für Formular-Daten
    const formData = reactive({
      name: '',
      street: '',
      city: '',
      tel_number: '',
      mail: '',
      birth_date: '',
      stelle: '',
      geschlecht: '',
      abteilung: '',
      newsletter: false,
      txt: ''
    })

    // Watcher: Speichert Formular-Daten automatisch in sessionStorage
    watch(formData, (newValue) => {
      sessionStorage.setItem('formData', JSON.stringify(newValue))
    }, { deep: true })

    onMounted(() => {
      // Job-Daten aus sessionStorage laden
      const stored = sessionStorage.getItem('selectedJob')
      if (stored) {
        selectedJob.value = JSON.parse(stored)
      }

      // Gespeicherte Formular-Daten laden
      const savedFormData = sessionStorage.getItem('formData')
      if (savedFormData) {
        const data = JSON.parse(savedFormData)
        Object.assign(formData, data)
      }
    })

    const goBackToJob = () => {
      if (selectedJob.value?.slug) {
        router.push(`/jobs/${selectedJob.value.slug}`)
      }
    }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  
  h1 {
    font-family: 'Playfair Display', serif;
  }
  </style>