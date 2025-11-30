<template>
    <div>
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} Euro</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = `https://fakestoreapi.com/products/${id}`
    const { data: product } = await useFetch(url)
</script>