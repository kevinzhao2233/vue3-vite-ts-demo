import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd, { message } from 'ant-design-vue';
import router from './router';
import App from './App.vue';
import '@/styles/reset.css';
import '@/styles/global.css';
import '@icon-park/vue-next/styles/index.css';

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$message = message;

app.use(pinia);
app.use(router);
app.use(Antd);
app.mount('#app');
