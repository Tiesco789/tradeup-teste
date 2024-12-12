import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue'; // Use o componente principal da aplicação

import router from './router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');
