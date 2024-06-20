import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Rooms from '../components/Rooms.vue';
import Contact from '../components/Contact.vue';
import ExtremeSports from '../components/ExtremeSports.vue';
import Services from '../components/Services.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/rooms', component: Rooms },
  { path: '/contact', component: Contact },
  { path: '/extreme-sports', component: ExtremeSports },
  { path: '/services', component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
