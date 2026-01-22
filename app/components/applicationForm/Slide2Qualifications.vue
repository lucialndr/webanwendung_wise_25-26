<template>
    <div>
        <!-- Formular -->
        <form class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <!-- Slide Überschrift -->
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Qualifikationen</h3>
          
          <!-- Abschluss auswählen  -->
          <div class="mb-6">
            <label for="abschluss" class="block text-sm font-semibold text-gray-700 mb-2">
              Höchster Abschluss *
            </label>
            <select 
              v-model="localData.abschluss"
              name="abschluss" 
              id="abschluss" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition bg-white"
              required
            >
              <option value="">Bitte wählen...</option>
              <option value="Hauptschulabschluss">Hauptschulabschluss</option>
              <option value="Realschulabschluss">Realschulabschluss</option>
              <option value="Abitur">Abitur</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Ausbildung">Ausbildung</option>
              <option value="SSonstiges">Sonstiges</option>
            </select>
          </div>
          <!-- Berufserfahrung -->
          <div class="mb-8">
            <label class="block text-sm font-semibold text-gray-700 mb-2">
                Berufserfahrung *
            </label>
            <div class="flex flex-wrap gap-4">
                <label class="flex items-center">
                <input v-model="localData.berufserfahrung" type="radio" value="0-1" class="w-4 h-4" />
                <span class="ml-1 text-gray-700">0–1 Jahre</span>
                </label>
                <label class="flex items-center">
                <input v-model="localData.berufserfahrung" type="radio" value="1-3" class="w-4 h-4" />
                <span class="ml-1 text-gray-700">1–3 Jahre</span>
                </label>
                <label class="flex items-center">
                <input v-model="localData.berufserfahrung" type="radio" value="3-5" class="w-4 h-4" />
                <span class="ml-1 text-gray-700">3–5 Jahre</span>
                </label>
                <label class="flex items-center">
                <input v-model="localData.berufserfahrung" type="radio" value="5-10" class="w-4 h-4" />
                <span class="ml-1 text-gray-700">5–10 Jahre</span>
                </label>
                <label class="flex items-center">
                <input v-model="localData.berufserfahrung" type="radio" value="10+" class="w-4 h-4" />
                <span class="ml-1 text-gray-700">10+ Jahre</span>
                </label>
            </div>
            </div>
            <!-- Sprachen -->
            <div class="mb-6">
                <label for="sprachen" class="block text-sm font-semibold text-gray-700 mb-2">
                    Sprachen
                </label>
                <input 
                    v-model="localData.sprachen"
                    type="text" 
                    id="sprachen" 
                    name="sprachen" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
                    placeholder="z.B. Deutsch, Englisch, Französisch" 
                    maxlength="100"
                >
            </div>

            <!-- Verfügbarkeit -->
            <div class="mb-8">
              <label for="verfuegbarkeit" class="block text-sm font-semibold text-gray-700 mb-2">
                Verfügbarkeit ab
              </label>
              <input 
                v-model="localData.verfuegbarkeit"
                type="date" 
                id="verfuegbarkeit"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              />
            </div>

            <!-- Schichtbereitschaft -->
            <div class="mb-8">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Schichtbereitschaft
              </label>
              <div class="flex flex-wrap gap-4">
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Früh"
                    :checked="localData.schichtbereitschaft?.includes('Früh')"
                    @change="toggleItem(localData.schichtbereitschaft, 'Früh')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Früh</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Spät"
                    :checked="localData.schichtbereitschaft?.includes('Spät')"
                    @change="toggleItem(localData.schichtbereitschaft, 'Spät')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Spät</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Nacht"
                    :checked="localData.schichtbereitschaft?.includes('Nacht')"
                    @change="toggleItem(localData.schichtbereitschaft, 'Nacht')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Nacht</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Wochenende"
                    :checked="localData.schichtbereitschaft?.includes('Wochenende')"
                    @change="toggleItem(localData.schichtbereitschaft, 'Wochenende')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Wochenende</span>
                </label>
              </div>
            </div>

            <!-- Führerschein -->
            <div class="mb-8">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Führerschein
              </label>
              <div class="flex gap-4 mb-3">
                <label class="flex items-center">
                  <input v-model="localData.fuehrerschein" type="radio" value="ja" class="w-4 h-4" />
                  <span class="ml-1 text-gray-700">Ja</span>
                </label>
                <label class="flex items-center">
                  <input v-model="localData.fuehrerschein" type="radio" value="nein" class="w-4 h-4" />
                  <span class="ml-1 text-gray-700">Nein</span>
                </label>
              </div>
              <select 
                v-if="localData.fuehrerschein === 'ja'"
                v-model="localData.fuehrerschein_klasse"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Klasse wählen...</option>
                <option value="B">Klasse B</option>
                <option value="BE">Klasse BE</option>
                <option value="C">Klasse C</option>
                <option value="C1">Klasse C1</option>
                <option value="Mehrere">Mehrere</option>
              </select>
            </div>

            <!-- IT-Kenntnisse -->
            <div class="mb-8">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                IT-Kenntnisse
              </label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="MS Office"
                    :checked="localData.it_kenntnisse?.includes('MS Office')"
                    @change="toggleItem(localData.it_kenntnisse, 'MS Office')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">MS Office</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="PMS"
                    :checked="localData.it_kenntnisse?.includes('PMS')"
                    @change="toggleItem(localData.it_kenntnisse, 'PMS')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Hotel-PMS (z.B. Opera, Fidelio)</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Kassensystem"
                    :checked="localData.it_kenntnisse?.includes('Kassensystem')"
                    @change="toggleItem(localData.it_kenntnisse, 'Kassensystem')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Kassensystem</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Reservierungssystem"
                    :checked="localData.it_kenntnisse?.includes('Reservierungssystem')"
                    @change="toggleItem(localData.it_kenntnisse, 'Reservierungssystem')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Reservierungssystem</span>
                </label>
              </div>
            </div>

            <!-- Zertifikate -->
            <div class="mb-8">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Zertifikate / Nachweise
              </label>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Hygiene"
                    :checked="localData.zertifikate?.includes('Hygiene')"
                    @change="toggleItem(localData.zertifikate, 'Hygiene')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Hygienebestätigung</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Ersthelfer"
                    :checked="localData.zertifikate?.includes('Ersthelfer')"
                    @change="toggleItem(localData.zertifikate, 'Ersthelfer')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Erste Hilfe</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Ausbildereignung"
                    :checked="localData.zertifikate?.includes('Ausbildereignung')"
                    @change="toggleItem(localData.zertifikate, 'Ausbildereignung')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Ausbildereignung</span>
                </label>
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    value="Brandschutz"
                    :checked="localData.zertifikate?.includes('Brandschutz')"
                    @change="toggleItem(localData.zertifikate, 'Brandschutz')"
                    class="w-4 h-4" 
                  />
                  <span class="ml-1 text-gray-700">Brandschutz</span>
                </label>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between mt-8">
            <button type="button" @click="$emit('prev')" class="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                ← Zurück
            </button>
            <button type="button" @click="$emit('next')" class="bg-stone-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-700 transition">
                Weiter →
            </button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
      modelValue: { type: Object, required: true }
    })

    const emit = defineEmits(['update:modelValue', 'next', 'prev'])

    const localData = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    })

    const toggleItem = (array, item) => {
      if (!array) return
      const index = array.indexOf(item)
      if (index > -1) {
        array.splice(index, 1)
      } else {
        array.push(item)
      }
    }
</script>
