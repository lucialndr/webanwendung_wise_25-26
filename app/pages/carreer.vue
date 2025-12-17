<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div class="max-w-3xl mx-auto">
        
        <!-- Header -->
        <header class="text-center mb-10">
          <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">
            Hotel ...
          </h1>
          <p class="text-xl text-gray-600">Kontaktformular</p>
          <div class="w-24 h-1 bg-gray-800 mx-auto mt-4"></div>
        </header>
  
        <!-- Formular -->
        <form action="antwort_formular.php" method="post" class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          
          <!-- Name -->
          <div class="mb-6">
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input 
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
                  type="radio" 
                  name="stelle" 
                  value="Mini-Job" 
                  class="w-4 h-4 text-gray-800 focus:ring-gray-800"
                >
                <span class="ml-3 text-gray-700">Mini-Job</span>
              </label>
  
              <label class="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input 
                  type="radio" 
                  name="stelle" 
                  value="Vollzeit_Stelle" 
                  class="w-4 h-4 text-gray-800 focus:ring-gray-800"
                >
                <span class="ml-3 text-gray-700">Vollzeit Stelle</span>
              </label>
            </div>
          </div>
  
          <!-- Abteilung auswählen  -->
          <div class="mb-6">
            <label for="abteilung" class="block text-sm font-semibold text-gray-700 mb-2">
              Abteilung *
            </label>
            <select 
              name="abteilung" 
              id="abteilung" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition bg-white"
              required
            >
              <option value="">Bitte wählen...</option>
              <option value="Küche">Küche</option>
              <option value="Service">Service</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
  
          <!-- Newsletter -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 mb-3">
              Newsletter zu Jobangeboten
            </label>
            
            <label class="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input 
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
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  
  h1 {
    font-family: 'Playfair Display', serif;
  }
  </style>