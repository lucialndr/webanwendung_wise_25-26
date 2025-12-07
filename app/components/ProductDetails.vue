<template>
    <div class="p-7">
      <h2 class="text-4xl my-7">{{ product.title }}</h2>
  
      <p class="text-xl my-7">
        Preis: {{ formatPrice(product.price) }} Euro
      </p>
  
      <h3 class="font-bold border-b-2 mb-4 pb-2">
        Produktinformation
      </h3>
  
      <p class="mb-7">{{ product.description }}</p>
  
      <button class="btn flex items-center">
        <i class="fa-solid fa-cart-shopping mr-2"></i>
        <span>Zum Warenkorb</span>
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  
  function formatPrice(price) {
    if (!price) return '0.00'
    return Number(price).toFixed(2)
  }
  </script>
  