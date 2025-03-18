<template>
    <div>
        <h1 class="animate__animated animate__backInRight animate__faster">
            About page
        </h1>
        <h6>About page content</h6>
        <img src="/img/smile.jpg" alt="smile" />
    </div>
</template>

<script setup>
// import "~/assets/css/libs/first.css";
useSeoMeta({
    title: "About page",
    description: "About page description",
    keywords: "About, page, vue, nuxt",
});
// definePageMeta({
//     layout: "orange",
// });
</script>

<style scoped>
@import url("~/assets/css/libs/first.css");
</style>
