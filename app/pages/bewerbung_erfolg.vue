<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 class="text-2xl font-bold text-gray-900 mb-3">Bewerbung eingegangen!</h1>
        
        <p class="text-gray-600 mb-6">
          Vielen Dank für Ihre Bewerbung. Wir haben Ihre Unterlagen erhalten und werden uns in Kürze bei Ihnen melden.
        </p>
        
        
        <NuxtLink 
          to="/" 
          class="inline-block bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition"
        >
          Zurück zur Homepage
        </NuxtLink>
      </div>
    </div>
</template>