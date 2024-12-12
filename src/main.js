import { createApp } from 'vue';
import './assets/main.css';
import HomeView from './HomeView.vue';

import router from './router';
import store from './store';

createApp(HomeView).use(router).use(store).mount('#app');
