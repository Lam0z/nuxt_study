export default defineNuxtConfig({
    runtimeConfig: {
        // Приватные ключи, доступные только на сервере
        apiSecret: "123",
        // Ключи внутри public также доступны и на клиенте
        public: {
            apiBase: "/api",
        },
    },

    compatibilityDate: "2025-03-18",
});
