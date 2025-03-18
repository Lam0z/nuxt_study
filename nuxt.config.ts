export default defineNuxtConfig({
    runtimeConfig: {
        // Приватные ключи, доступные только на сервере
        apiSecret: "123",
        // Ключи внутри public также доступны и на клиенте
        public: {
            apiBase: "/api",
        },
    },
    app: {
        head: {
            // charset: "utf-8",
            // viewport: "width=device-width, initial-scale=1",
            title: "Stydy NUxT",
        },
    },
    css: ["~/assets/css/main.css", "bootstrap/dist/css/bootstrap.min.css"],
    compatibilityDate: "2025-03-18",
});
