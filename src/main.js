import { createApp } from 'vue';
import HomeView from './HomeView.vue';

import router from './router'; // Certifique-se de importar o router
import store from './store'; // Certifique-se de importar o store

createApp(HomeView).use(router).use(store).mount('#app');
