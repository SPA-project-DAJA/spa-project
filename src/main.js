// main.js
import './assets/main.css'


import { createApp } from 'vue';
import { createPinia } from 'pinia'
//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';
import router from './router'
import store from './store'; // Zakładając, że używasz Pinia

const app = createApp(App)



//bootstrap
app.use(BootstrapVue)
app.use(createPinia())
app.use(router)


app.use(IconsPlugin)


app.use(store)
app.mount('#app')



