<template>
    <div>user {{ route.params.number }} page</div>
</template>

<script setup>
const route = useRoute();
useSeoMeta({
    title: `User ${route.params.number} page`,
    description: "About page description",
    keywords: "About, page, vue, nuxt",
});
</script>

<style lang="scss" scoped></style>
