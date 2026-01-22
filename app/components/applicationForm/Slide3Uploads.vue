<template>
    <div>
        <!-- Slide Überschrift -->
        <h3 class="text-2xl font-bold text-gray-900">Bewerbungsdetails & Dokumente</h3>
        <!-- Formular -->
        <form class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          
          <!-- Gehaltsvorstellung -->
          <div class="mb-6">
            <label for="gehaltsvorstellung" class="block text-sm font-semibold text-gray-700 mb-2">
              Gehaltsvorstellung (optional)
            </label>
            <input 
              v-model="localData.gehaltsvorstellung"
              type="text" 
              id="gehaltsvorstellung" 
              name="gehaltsvorstellung" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              placeholder="z.B. 35.000 € - 40.000 € p.a."
              maxlength="50"
            >
          </div>

          <!-- Motivationsschreiben -->
          <div class="mb-6">
            <label for="motivation" class="block text-sm font-semibold text-gray-700 mb-2">
              Motivationsschreiben (optional)
            </label>
            <textarea 
              v-model="localData.motivation"
              id="motivation" 
              name="motivation" 
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition resize-none"
              placeholder="Warum möchten Sie bei uns arbeiten?"
              maxlength="2500"
            ></textarea>
            <p class="text-xs text-gray-500 mt-1">{{ localData.motivation?.length || 0 }} / 2500 Zeichen</p>
          </div>

          <!-- Dokumente Upload -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Dokumente hochladen</h4>
            
            <!-- Lebenslauf -->
            <div class="mb-4">
              <label for="lebenslauf" class="block text-sm font-semibold text-gray-700 mb-2">
                Lebenslauf * (PDF, DOC, DOCX)
              </label>
              <input 
                @change="handleFileUpload('lebenslauf', $event)"
                type="file" 
                id="lebenslauf"
                accept=".pdf,.doc,.docx"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-stone-800 file:text-white hover:file:bg-stone-700"
                required
              />
              <p v-if="localData.lebenslauf" class="text-xs text-green-600 mt-1">✓ {{ localData.lebenslauf }}</p>
            </div>

            <!-- Anschreiben -->
            <div class="mb-4">
              <label for="anschreiben" class="block text-sm font-semibold text-gray-700 mb-2">
                Anschreiben (PDF, DOC, DOCX)
              </label>
              <input 
                @change="handleFileUpload('anschreiben', $event)"
                type="file" 
                id="anschreiben"
                accept=".pdf,.doc,.docx"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-stone-800 file:text-white hover:file:bg-stone-700"
              />
              <p v-if="localData.anschreiben" class="text-xs text-green-600 mt-1">✓ {{ localData.anschreiben }}</p>
            </div>

            <!-- Weitere Zertifikate -->
            <div class="mb-4">
              <label for="zertifikate_upload" class="block text-sm font-semibold text-gray-700 mb-2">
                Weitere Zertifikate/Nachweise (optional)
              </label>
              <input 
                @change="handleFileUpload('zertifikate_upload', $event)"
                type="file" 
                id="zertifikate_upload"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                multiple
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-stone-800 file:text-white hover:file:bg-stone-700"
              />
              <p v-if="localData.zertifikate_upload" class="text-xs text-green-600 mt-1">✓ {{ localData.zertifikate_upload }}</p>
            </div>
          </div>

          <!-- Passwort (für Bewerber-Account) -->
          <div class="mb-6">
            <label for="passwort" class="block text-sm font-semibold text-gray-700 mb-2">
              Passwort für Bewerber-Account *
            </label>
            <input 
              v-model="localData.passwort"
              type="password" 
              id="passwort" 
              name="passwort" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              placeholder="Mindestens 8 Zeichen"
              minlength="8"
              required
            >
            <p class="text-xs text-gray-500 mt-1">Mit diesem Passwort können Sie sich später einloggen und Ihre Bewerbung einsehen.</p>
          </div>

          <!-- Newsletter -->
          <div class="mb-6">
            <label class="flex items-start">
              <input 
                v-model="localData.newsletter"
                type="checkbox" 
                class="w-4 h-4 mt-1 text-gray-800"
              />
              <span class="ml-2 text-sm text-gray-700">
                Ich möchte den Newsletter erhalten und über neue Stellenangebote informiert werden.
              </span>
            </label>
          </div>

          <!-- Datenschutz -->
          <div class="mb-8">
            <label class="flex items-start">
              <input 
                v-model="localData.datenschutz"
                type="checkbox" 
                class="w-4 h-4 mt-1 text-gray-800"
                required
              />
              <span class="ml-2 text-sm text-gray-700">
                Ich habe die <a href="/datenschutz" target="_blank" class="text-stone-800 underline hover:text-stone-600">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
              </span>
            </label>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-8">
            <button 
              type="button" 
              @click="$emit('prev')" 
              class="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              ← Zurück
            </button>
            <button 
              type="button" 
              @click="$emit('submit')" 
              class="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Bewerbung absenden ✓
            </button>
          </div>

          <p class="text-sm text-gray-500 text-center mt-6">
            * Pflichtfelder
          </p>
        </form>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
      modelValue: { type: Object, required: true }
    })

    const emit = defineEmits(['update:modelValue', 'submit', 'prev'])

    const localData = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    })

    const handleFileUpload = (fieldName, event) => {
      const files = event.target.files
      if (files.length > 0) {
        if (fieldName === 'zertifikate_upload' && files.length > 1) {
          // Mehrere Dateien
          const fileNames = Array.from(files).map(f => f.name).join(', ')
          localData.value[fieldName] = fileNames
        } else {
          // Einzelne Datei
          localData.value[fieldName] = files[0].name
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>