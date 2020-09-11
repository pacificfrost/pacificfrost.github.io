import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    component: Home,
    name: 'Home',
    path: '/',
  },
];

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  mode: 'history',
  routes,
});

export default router;
