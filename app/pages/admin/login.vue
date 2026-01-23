<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div class="max-w-md w-full">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">Admin-Login</h1>
          <p class="text-gray-600 text-center mb-6">Bewerbungsverwaltung</p>
          
          <div v-if="error" class="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-800 text-sm">{{ error }}</p>
          </div>
          
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                E-Mail
              </label>
              <input 
                v-model="email"
                type="email" 
                id="email" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              />
            </div>
            
            <div class="mb-6">
              <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
                Passwort
              </label>
              <input 
                v-model="password"
                type="password" 
                id="password" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition"
              />
            </div>
            
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full bg-stone-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-700 transition disabled:opacity-50"
            >
              {{ isLoading ? 'Wird geladen...' : 'Anmelden' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const supabase = useSupabase()
  const router = useRouter()
  
  const email = ref('')
  const password = ref('')
  const error = ref(null)
  const isLoading = ref(false)
  
  const handleLogin = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      
      if (loginError) throw loginError
      
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()
      
      if (profileError || !profile || profile.role !== 'admin') {
        await supabase.auth.signOut()
        throw new Error('Keine Admin Berechtigung')
      }
      
      router.push('/admin/dashboard')
      
    } catch (err) {
      console.error('Login-Fehler:', err)
      error.value = err.message === 'Invalid login credentials' 
        ? 'Ungültiges E-Mail oder Passwort' 
        : err.message === 'Keine Admin-Berechtigung'
        ? 'Sie haben keine Berechtigung für den Admin Bereich'
        : 'Ein Fehler ist aufgetreten'
    } finally {
      isLoading.value = false
    }
  }
  </script>