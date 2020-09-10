import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/Home.vue';
import PetProfile from '@/views/PetProfile.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    component: Home,
    name: 'Home',
    path: '/',
  },
  {
    component: PetProfile,
    name: 'PetProfile',
    path: '/pet/:id',
  },
];

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/mapet/' : '/',
  mode: 'history',
  routes,
});

export default router;
