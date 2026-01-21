<template>
  <div class="min-h-screen flex flex-col">

    <!-- CONTENT -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="bg-stone-700 text-white text-center py-4">
      © Hotel Excellence |
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


  
  
