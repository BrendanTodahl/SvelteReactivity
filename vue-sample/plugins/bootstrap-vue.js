/* eslint-disable import/first */
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.min.css'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(BootstrapVue3)
})
