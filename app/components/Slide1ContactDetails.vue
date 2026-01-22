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
        <div v-if="props.selectedJob" class="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex justify-between items-start gap-4">
            <div>
              <p class="text-sm text-gray-600 mb-1">Bewerbung für:</p>
              <h2 class="text-2xl font-bold text-gray-900">{{ props.selectedJob.title }}</h2>
              <p class="text-sm text-gray-600 mt-2">Abteilung: {{ props.selectedJob.department }}</p>
            </div>
            <button
              @click="goBackToJob"
              class="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              ← Zurück zur Stellenbeschreibung
            </button>
          </div>
        </div>


        <!-- Slide Überschrift -->
        <h3 class="text-2xl font-bold text-gray-900">Kontaktdaten</h3>
        <!-- Formular -->
        <form action="antwort_formular.php" method="post" class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <!-- Geschlecht -->
          <div class="mb-6">
            <label for="geschlecht" class="block text-sm font-semibold text-gray-700 mb-2">
              Geschlecht
            </label>
            <input  type="radio" name="geschlecht" id="r1" value="m">
            <label for="r1">Männlich</label><br>
            <input type="radio" name="geschlecht" id="r2" value="w">
            <label for="r2">Weiblich</label><br>
            <input type="radio" name="geschlecht" id="r3" value="d">
            <label for="r3">Divers</label>
          </div>

          <!-- Name -->
          <div class="mb-6">
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input 
              v-model="localData.name"
              type="text" 
              id="name" 
              name="name" 
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
              v-model="localData.street"
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
              v-model="localData.city"
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
              <label for="tel_number" class="block text-sm font-semibold text-gray-700 mb-2">
                Telefon / Mobil *
              </label>
              <input 
                v-model="localData.tel_number"
                type="tel" 
                id="tel_number" 
                name="tel_number" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
                placeholder="+49 172 6629675" 
                maxlength="40"
                required
              >
            </div>
  
            <!-- Email -->
            <div>
              <label for="mail" class="block text-sm font-semibold text-gray-700 mb-2">
                E-Mail *
              </label>
              <input 
                v-model="localData.mail"
                type="email" 
                id="mail" 
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
            <label for="birth_date" class="block text-sm font-semibold text-gray-700 mb-2">
              Geburtsdatum
            </label>
            <input 
              v-model="localData.birth_date"
              type="date" 
              id="birth_date" 
              name="birth_date" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
            >
          </div>
          <button 
              type="button"
              @click="$emit('next')"
              class="bg-stone-800 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Weiter →
            </button>
        </form>
      </div>
    </div>

  </template>
  
  <script setup>
    import { computed } from 'vue'

    const props = defineProps({
      modelValue: { type: Object, required: true },
      selectedJob: { type: Object, default: null }
    })

    const emit = defineEmits(['update:modelValue', 'next', 'goBack'])

    const localData = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    })

    const goBackToJob = () => {
      emit('goBack')
    }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  
  h1 {
    font-family: 'Playfair Display', serif;
  }
  </style>