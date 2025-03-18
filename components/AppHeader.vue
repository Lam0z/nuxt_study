<template>
    <header>
        <NuxtLink to="/">Main page</NuxtLink>
        <NuxtLink to="/about">About page</NuxtLink>
        <div>Path is : {{ route.path }}</div>
        <div>route params: {{ route.params }}</div>
    </header>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
