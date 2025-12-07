<template>
    <div>
        <ProductDetails v-if="product" :product="product" />
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} Euro</p>
    </div>
    <div>
        <Head>
        <Title>Mein Shop | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = `https://fakestoreapi.com/products/${id}`
    const { data: product } = await useFetch(url)
</script>