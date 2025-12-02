<script setup>
    const { product } = defineProps(['product'])
    if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Produkt nicht gefunden'})
    }
</script>