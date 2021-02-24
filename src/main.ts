import { createApp } from 'vue'
import { store, key } from './store'
import App from '/@/App.vue'
import './index.css'
console.log(App);
const app = createApp(App)

app.use(store, key)

app.mount('#app')