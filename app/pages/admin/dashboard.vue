<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p class="text-gray-600 mt-1">{{ bewerbungen.length }} Bewerbungen gesamt</p>
          </div>
          <button 
            @click="handleLogout"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Abmelden
          </button>
        </div>
  
        <div v-if="loading" class="text-center py-12">
          <p class="text-gray-600">Lädt...</p>
        </div>
  
        <div v-else>
          
          <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Status Filter</label>
                <select 
                  v-model="filterStatus"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800"
                >
                  <option value="">Alle Status</option>
                  <option value="eingegangen">Eingegangen</option>
                  <option value="in_prüfung">In Prüfung</option>
                  <option value="eingeladen">Eingeladen</option>
                  <option value="abgelehnt">Abgelehnt</option>
                  <option value="zugesagt">Zugesagt</option>
                </select>
              </div>
  
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Job Position</label>
                <select 
                  v-model="filterJob"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800"
                >
                  <option value="">Alle Positionen</option>
                  <option v-for="job in uniqueJobs" :key="job" :value="job">{{ job }}</option>
                </select>
              </div>
  
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Suche</label>
                <input 
                  v-model="searchQuery"
                  type="text"
                  placeholder="Name oder E-Mail..."
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800"
                />
              </div>
            </div>
          </div>
  
          
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">E-Mail</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Position</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Datum</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Aktionen</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr 
                    v-for="bewerbung in filteredBewerbungen" 
                    :key="bewerbung.id"
                    class="hover:bg-gray-50 transition"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ bewerbung.name }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ bewerbung.mail }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ bewerbung.job_title || '-' }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ formatDate(bewerbung.created_at) }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <select 
                        :value="bewerbung.status"
                        @change="updateStatus(bewerbung.id, $event.target.value)"
                        :class="getStatusClass(bewerbung.status)"
                        class="px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer"
                      >
                        <option value="eingegangen">Eingegangen</option>
                        <option value="in_prüfung">In Prüfung</option>
                        <option value="eingeladen">Eingeladen</option>
                        <option value="abgelehnt">Abgelehnt</option>
                        <option value="zugesagt">Zugesagt</option>
                      </select>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <button 
                        @click="viewDetails(bewerbung)"
                        class="text-stone-800 hover:text-stone-600 font-medium mr-3"
                      >
                        Details
                      </button>
                      <button 
                        @click="deleteBewerbung(bewerbung.id)"
                        class="text-red-600 hover:text-red-800 font-medium"
                      >
                        Löschen
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div v-if="filteredBewerbungen.length === 0" class="text-center py-12">
              <p class="text-gray-600">Es wurdeb keine Bewerbungen gefunden</p>
            </div>
          </div>
        </div>
  
        
        <div 
          v-if="selectedBewerbung" 
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          @click.self="selectedBewerbung = null"
        >
          <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center">
              <h2 class="text-2xl font-bold text-gray-900">Bewerbungsdetails</h2>
              <button 
                @click="selectedBewerbung = null"
                class="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

  
            <div class="px-8 py-6">
              
            <div class="mb-6 flex justify-end">
                <button 
                    @click="sendEmail(selectedBewerbung)"
                    class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                    <span>📧</span>
                    E-Mail senden
                </button>
            </div>

              <section class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Persönliche Daten</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm text-gray-600">Geschlecht</p>
                    <p class="font-medium">{{ selectedBewerbung.geschlecht || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Name</p>
                    <p class="font-medium">{{ selectedBewerbung.name }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Straße</p>
                    <p class="font-medium">{{ selectedBewerbung.street || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Stadt</p>
                    <p class="font-medium">{{ selectedBewerbung.city || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Telefon</p>
                    <p class="font-medium">{{ selectedBewerbung.tel_number || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">E-Mail</p>
                    <p class="font-medium">{{ selectedBewerbung.mail }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Geburtsdatum</p>
                    <p class="font-medium">{{ selectedBewerbung.birth_date || '-' }}</p>
                  </div>
                </div>
              </section>
  
              
              <section class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Qualifikationen</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm text-gray-600">Abschluss</p>
                    <p class="font-medium">{{ selectedBewerbung.abschluss || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Berufserfahrung</p>
                    <p class="font-medium">{{ selectedBewerbung.berufserfahrung || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Sprachen</p>
                    <p class="font-medium">{{ selectedBewerbung.sprachen || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Führerschein</p>
                    <p class="font-medium">{{ selectedBewerbung.fuehrerschein || '-' }} {{ selectedBewerbung.fuehrerschein_klasse ? `(${selectedBewerbung.fuehrerschein_klasse})` : '' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">IT-Kenntnisse</p>
                    <p class="font-medium">{{ selectedBewerbung.it_kenntnisse?.join(', ') || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Zertifikate</p>
                    <p class="font-medium">{{ selectedBewerbung.zertifikate?.join(', ') || '-' }}</p>
                  </div>
                </div>
              </section>
  
              
              <section class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Verfügbarkeit</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm text-gray-600">Verfügbarkeit</p>
                    <p class="font-medium">{{ selectedBewerbung.verfuegbarkeit || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Schichtbereitschaft</p>
                    <p class="font-medium">{{ selectedBewerbung.schichtbereitschaft?.join(', ') || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Gehaltsvorstellung</p>
                    <p class="font-medium">{{ selectedBewerbung.gehaltsvorstellung || '-' }}</p>
                  </div>
                </div>
              </section>
  
              
              <section class="mb-8" v-if="selectedBewerbung.motivation">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Motivationsschreiben</h3>
                <p class="text-gray-700 whitespace-pre-wrap">{{ selectedBewerbung.motivation }}</p>
              </section>
  
              
              <section class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Dokumente</h3>
                <div class="space-y-2">
                  <div v-if="selectedBewerbung.lebenslauf_url" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span class="flex items-center text-gray-700">
                      <span class="mr-2">📄</span> Lebenslauf
                    </span>
                    <button 
                      @click="downloadFile(selectedBewerbung.lebenslauf_url)"
                      class="text-stone-800 hover:text-stone-600 font-medium text-sm"
                    >
                      Download
                    </button>
                  </div>
                  <div v-if="selectedBewerbung.anschreiben_url" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span class="flex items-center text-gray-700">
                      <span class="mr-2">📄</span> Anschreiben
                    </span>
                    <button 
                      @click="downloadFile(selectedBewerbung.anschreiben_url)"
                      class="text-stone-800 hover:text-stone-600 font-medium text-sm"
                    >
                      Download
                    </button>
                  </div>
                  <div v-if="selectedBewerbung.zertifikate_upload_url" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span class="flex items-center text-gray-700">
                      <span class="mr-2">📄</span> Zertifikate
                    </span>
                    <button 
                      @click="downloadFile(selectedBewerbung.zertifikate_upload_url)"
                      class="text-stone-800 hover:text-stone-600 font-medium text-sm"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </section>
  
              
              <section>
                <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Bewerbungsinformationen</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-sm text-gray-600">Position</p>
                    <p class="font-medium">{{ selectedBewerbung.job_title || '-' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Eingereicht am</p>
                    <p class="font-medium">{{ formatDate(selectedBewerbung.created_at) }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Newsletter</p>
                    <p class="font-medium">{{ selectedBewerbung.newsletter ? 'Ja' : 'Nein' }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Status</p>
                    <select 
                      :value="selectedBewerbung.status"
                      @change="updateStatus(selectedBewerbung.id, $event.target.value)"
                      :class="getStatusClass(selectedBewerbung.status)"
                      class="px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer"
                    >
                      <option value="eingegangen">Eingegangen</option>
                      <option value="in_prüfung">In Prüfung</option>
                      <option value="eingeladen">Eingeladen</option>
                      <option value="abgelehnt">Abgelehnt</option>
                      <option value="zugesagt">Zugesagt</option>
                    </select>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
definePageMeta({
middleware: 'admin'
})

const supabase = useSupabase()
const router = useRouter()

const bewerbungen = ref([])
const loading = ref(true)
const selectedBewerbung = ref(null)
const filterStatus = ref('')
const filterJob = ref('')
const searchQuery = ref('')


const loadBewerbungen = async () => {
try {
    const { data, error } = await supabase
    .from('bewerbungen')
    .select('*')
    .order('created_at', { ascending: false })
    
    if (error) throw error
    
    bewerbungen.value = data || []
} catch (error) {
    console.error('Fehler beim Laden:', error)
} finally {
    loading.value = false
}
}

const updateStatus = async (bewerbungId, newStatus) => {
try {
    const { error } = await supabase
    .from('bewerbungen')
    .update({ status: newStatus })
    .eq('id', bewerbungId)
    
    if (error) throw error
    
    const index = bewerbungen.value.findIndex(b => b.id === bewerbungId)
    if (index !== -1) {
    bewerbungen.value[index].status = newStatus
    }
    
    if (selectedBewerbung.value?.id === bewerbungId) {
    selectedBewerbung.value.status = newStatus
    }
} catch (error) {
    console.error('Fehler beim Update:', error)
    alert('Es gab einen Fehler beim Aktualisieren vom Status')
}
}

const deleteBewerbung = async (bewerbungId) => {
if (!confirm('Möchten Sie diese Bewerbung wirklich löschen?')) return

try {
    const { error } = await supabase
    .from('bewerbungen')
    .delete()
    .eq('id', bewerbungId)
    
    if (error) throw error
    
    bewerbungen.value = bewerbungen.value.filter(b => b.id !== bewerbungId)
    selectedBewerbung.value = null
} catch (error) {
    console.error('Es gab einen Fehler beim löschen:', error)
    alert('Fehler beim Löschen der Bewerbung')
}
}

const downloadFile = async (filePath) => {
try {
    const { data, error } = await supabase
    .storage
    .from('bewerbungsunterlagen')
    .download(filePath)
    
    if (error) throw error
    
    
    const url = URL.createObjectURL(data)
    const a = document.createElement('a')
    a.href = url
    a.download = filePath.split('/').pop()
    a.click()
    URL.revokeObjectURL(url)
} catch (error) {
    console.error('Download-Fehler:', error)
    alert('Es gab einen Fehler beim Download der Datei')
}
}

const viewDetails = (bewerbung) => {
selectedBewerbung.value = bewerbung
}

const handleLogout = async () => {
await supabase.auth.signOut()
router.push('/')
}

const filteredBewerbungen = computed(() => {
let result = bewerbungen.value

if (filterStatus.value) {
    result = result.filter(b => b.status === filterStatus.value)
}

if (filterJob.value) {
    result = result.filter(b => b.job_title === filterJob.value)
}

if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(b => 
    b.name.toLowerCase().includes(query) ||
    b.mail.toLowerCase().includes(query)
    )
}

return result
})

const uniqueJobs = computed(() => {
const jobs = bewerbungen.value
    .map(b => b.job_title)
    .filter(Boolean)
return [...new Set(jobs)]
})

const getStatusClass = (status) => {
const classes = {
    'eingegangen': 'bg-blue-100 text-blue-800',
    'in_prüfung': 'bg-yellow-100 text-yellow-800',
    'eingeladen': 'bg-green-100 text-green-800',
    'abgelehnt': 'bg-red-100 text-red-800',
    'zugesagt': 'bg-purple-100 text-purple-800'
}
return classes[status] || 'bg-gray-100 text-gray-800'
}

const formatDate = (dateString) => {
if (!dateString) return '-'
return new Date(dateString).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})
}
  
const sendEmail = (bewerbung) => {
    const subject = encodeURIComponent(`Ihre Bewerbung als ${bewerbung.job_title || 'Mitarbeiter'}`)
    const body = encodeURIComponent(`Sehr geehrte/r ${bewerbung.name},\n\nvielen Dank für Ihre Bewerbung.\n\nMit freundlichen Grüßen\nIhr Hotel Excellence Team`)
  
  window.location.href = `mailto:${bewerbung.mail}?subject=${subject}&body=${body}`
}

onMounted(() => {
  loadBewerbungen()
})
</script>

