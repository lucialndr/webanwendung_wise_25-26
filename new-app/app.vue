<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  htmlAttrs: { lang: 'de' },
})
</script>
