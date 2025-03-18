export default defineNuxtConfig({
    runtimeConfig: {
        // Приватные ключи, доступные только на сервере
        apiSecret: "123",
        // Ключи внутри public также доступны и на клиенте
        public: {
            apiBase: "/api",
        },
    },
    css: ["~/assets/css/main.css", "bootstrap/dist/css/bootstrap.min.css"],
    compatibilityDate: "2025-03-18",
});
