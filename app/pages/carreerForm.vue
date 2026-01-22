<template >
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div class="max-w-3xl mx-auto">
        
        <!-- Display current Slide -->
        <div class="text-center mb-8">
          <p class="text-gray-600 mb-2">Schritt {{ currentSlide }} von 3</p>
          <div class="w-full bg-gray-200 h-2 rounded-full">
            <div :style="{ width: (currentSlide / 3 * 100) + '%' }" 
                 class="bg-stone-800 h-2 rounded-full transition-all">
            </div>
          </div>
        </div>

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
            @prev="goToPrevSlide"
            @submit="submitForm"
        />
      </div>
    </div>
</template>

<script setup>
    import { ref, reactive, watch, onMounted } from 'vue'
    import { useRouter } from 'nuxt/app'
    import Slide1ContactDetails from '~/components/applicationForm/Slide1ContactDetails.vue'
    import Slide2Qualifications from '~/components/applicationForm/Slide2Qualifications.vue'
    import Slide3Uploads from '~/components/applicationForm/Slide3Uploads.vue'

    const router = useRouter()
    const currentSlide = ref(1)
    const selectedJob = ref(null)
    
    // Formular-Daten für alle 3 Slides
    const formData = reactive({
    // Slide 1: Kontaktdaten
    geschlecht: '',
    name: '',
    street: '',
    city: '',
    tel_number: '',
    mail: '',
    birth_date: '',
    
    // Slide 2: Qualifikationen
    abschluss: '',
    berufserfahrung: '',
    sprachen: '',
    verfuegbarkeit: '',
    schichtbereitschaft: [],
    fuehrerschein: '',
    fuehrerschein_klasse: '',
    it_kenntnisse: [],
    zertifikate: [],
    
    // Slide 3: Bewerbungsdetails & Uploads
    gehaltsvorstellung: '',
    motivation: '',
    lebenslauf: null,
    anschreiben: null,
    zertifikate_upload: null,
    passwort: '',
    newsletter: false,
    datenschutz: false
    })

    // speichert Formulardaten automatisch in sessionStorage
    watch(formData, (newValue) => {
      sessionStorage.setItem('formData', JSON.stringify(newValue))
    }, { deep: true })

    onMounted(() => {
      // Job-Daten laden
      const stored = sessionStorage.getItem('selectedJob')
      if (stored) {
        selectedJob.value = JSON.parse(stored)
      }

      // Formular-Daten laden
      const savedFormData = sessionStorage.getItem('formData')
      if (savedFormData) {
        const data = JSON.parse(savedFormData)
        Object.assign(formData, data)
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
    
    const submitForm = () => {
        console.log('Formular absenden:', formData)
        // Hier später: FormData mit Dateien an Server senden
    }
</script>