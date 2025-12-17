<template>
  <div class="min-h-screen flex flex-col">
    <!-- NAVIGATION -->
    <nav class="bg-stone-700 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          
          <!-- Logo -->
          <NuxtLink to="/" class="text-xl font-serif font-bold">
            Hotel ...
          </NuxtLink>

          <!-- Menü -->
          <ul class="hidden md:flex space-x-8">
            <li>
              <NuxtLink to="/" class="flex items-center gap-1 hover:text-red-400">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/booking" class="flex items-center gap-1 hover:text-red-400">
                Buchen
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/gallery" class="flex items-center gap-1 hover:text-red-400">
                Galerie
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/restaurant" class="flex items-center gap-1 hover:text-red-400">
                Restaurant
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/spa" class="flex items-center gap-1 hover:text-red-400">
                Spa
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/carreer" class="flex items-center gap-1 hover:text-red-400">
                Karriere
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="flex items-center gap-1 hover:text-red-400">
                About
              </NuxtLink>
            </li>
          </ul>

          <!-- Mobiles Menu, wenn Seite kleiner wird -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-white focus:outline-none"
          >
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!mobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

        </div>

        <!-- Mobile Menü (ausklappbar) -->
        <div 
          v-show="mobileMenuOpen"
          class="md:hidden pb-4"
        >
          <ul class="space-y-2">
            <li>
              <NuxtLink 
                to="/" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/buchen" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                Buchen
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/gallerie" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                Galerie
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/restaurant" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                Restaurant
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/spa" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                Spa
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/karriere" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                Karriere
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/about" 
                class="block py-2 px-4 hover:bg-gray-800 rounded"
                @click="mobileMenuOpen = false"
              >
                About
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <!-- CONTENT -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="bg-stone-700 text-white text-center py-4">
      © Hotel ... |
      <NuxtLink to="/impressum" class="underline hover:text-yellow-400">
        Impressum
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.material-symbols-outlined {
  vertical-align: middle;
}
</style>


  
  
