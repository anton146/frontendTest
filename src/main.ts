import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Dialog, Loading, Notify, Quasar } from 'quasar'
import { VueQueryPlugin } from "@tanstack/vue-query";
import axiosInstance from './api/axios'

import '@/assets/main.css'
import App from './App.vue'
import router from './router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, // 2 minutes
                refetchOnReconnect: 'always',
            }
        }
    }
});

app.use(Quasar, {
    plugins: {
        Loading,
        Notify, Dialog
    }, // import Quasar plugins and add here
})

app.use(createPinia())
app.use(router)

app.config.globalProperties.$axios = axiosInstance;

app.mount('#app')

