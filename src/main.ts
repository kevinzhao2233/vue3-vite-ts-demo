import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import 'element-plus/lib/theme-chalk/index.css';
import { store, key } from './store';
import App from './App.vue';
import '@/styles/reset.css';
import '@/styles/global.css';

const app = createApp(App);
app.use(store, key);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
