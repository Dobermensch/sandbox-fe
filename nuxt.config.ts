// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      wsApiBase: process.env.NODE_ENV === 'production' ? 'wss://localhost:3001' : "ws://localhost:3001",
    }
  },
})
