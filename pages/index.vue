<script setup>
const isActive = ref(true);
const hasError = ref(false);
const classObject = ref({
    active: true,
    "text-danger": false,
});
const color = ref("orange");

async function getData() {
    const res = await useFetch("https://jsonplaceholder.typicode.com/todos/1");
    // const data = await res.json();
    console.log(res);
}
onMounted(() => {
    getData();
});
</script>
<template>
    <div>
        <h1 class="alert alert-success" :class="{ 'text-success': isActive }">
            Main page
        </h1>

        <h6
            class="text"
            :class="classObject"
            @click="classObject['text-danger'] = !classObject['text-danger']"
        >
            main page content
        </h6>
        <img src="~/assets/img/wolf.jpg" alt="wolf" />
    </div>
</template>

<style scoped>
.text {
    color: v-bind(color);
}
</style>
