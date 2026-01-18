<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-stone-700 text-white">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex h-16 items-center justify-between">
          <NuxtLink to="/" class="text-xl font-serif font-bold">Hotel ...</NuxtLink>
          <ul class="hidden space-x-8 md:flex">
            <li><NuxtLink to="/" class="hover:text-red-400">Home</NuxtLink></li>
            <li><NuxtLink to="/booking" class="hover:text-red-400">Buchen</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="hover:text-red-400">Galerie</NuxtLink></li>
            <li><NuxtLink to="/restaurant" class="hover:text-red-400">Restaurant</NuxtLink></li>
            <li><NuxtLink to="/spa" class="hover:text-red-400">Spa</NuxtLink></li>
            <li><NuxtLink to="/carreer" class="hover:text-red-400">Karriere</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-red-400">About</NuxtLink></li>
          </ul>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white focus:outline-none md:hidden">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div v-show="mobileMenuOpen" class="pb-4 md:hidden">
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">Home</NuxtLink></li>
            <li><NuxtLink to="/buchen" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">Buchen</NuxtLink></li>
            <li><NuxtLink to="/gallerie" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">Galerie</NuxtLink></li>
            <li><NuxtLink to="/restaurant" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">Restaurant</NuxtLink></li>
            <li><NuxtLink to="/spa" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">Spa</NuxtLink></li>
            <li><NuxtLink to="/karriere" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">Karriere</NuxtLink></li>
            <li><NuxtLink to="/about" class="block rounded px-4 py-2 hover:bg-gray-800" @click="mobileMenuOpen = false">About</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-stone-700 py-4 text-center text-white">
      © Hotel ... |
      <NuxtLink to="/impressum" class="underline hover:text-yellow-400">Impressum</NuxtLink>
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
