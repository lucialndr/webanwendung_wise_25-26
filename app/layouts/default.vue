<template>
  <div class="min-h-screen flex flex-col">

    <!-- NAVIGATION -->
    <nav class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">

          <!-- Logo -->
          <NuxtLink to="/" class="text-xl font-bold">
            Hotel ...
          </NuxtLink>

          <!-- Menü -->
          <ul class="hidden md:flex space-x-8">
            <li>
              <NuxtLink to="/" class="flex items-center gap-1 hover:text-yellow-400">
                Home
                <span class="material-symbols-outlined"></span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/buchen" class="flex items-center gap-1 hover:text-yellow-400">
                Buchen
                <span class="material-symbols-outlined"></span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/gallerie" class="flex items-center gap-1 hover:text-yellow-400">
                Galerie
                <span class="material-symbols-outlined"></span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/restaurant" class="flex items-center gap-1 hover:text-yellow-400">
                Restaurant
                <span class="material-symbols-outlined"></span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/spa" class="flex items-center gap-1 hover:text-yellow-400">
                Spa
                <span class="material-symbols-outlined"></span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/karriere" class="flex items-center gap-1 hover:text-yellow-400">
                Karriere
                <span class="material-symbols-outlined"></span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/about" class="flex items-center gap-1 hover:text-yellow-400">
                About
                <span class="material-symbols-outlined"></span>
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
    <footer class="bg-gray-900 text-white text-center py-4">
      © Hotel ... |
      <NuxtLink to="/impressum" class="underline hover:text-yellow-400">
        Impressum
      </NuxtLink>
    </footer>

  </div>
</template>

<style scoped>
.material-symbols-outlined {
  vertical-align: middle;
}
</style>


  
  
