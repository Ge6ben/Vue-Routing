import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TheNav from './components/TheNav.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TheNav }
  ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
