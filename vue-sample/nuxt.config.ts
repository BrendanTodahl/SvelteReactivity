// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: [
        '@/assets/styles.css'
    ],
    plugins: [
        '@/plugins/bootstrap-vue'
    ]
})
