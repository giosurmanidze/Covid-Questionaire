import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './style.css'
import './vee-validate/rules'
import './vee-validate/messages'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')