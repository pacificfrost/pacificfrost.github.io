import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/Home.vue';
import { Position } from 'vue-router/types/router';

Vue.use(VueRouter);

type ScrollPosition = {
  selector: string;
  offset: Position;
};

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
  scrollBehavior: to => {
    const position = {} as ScrollPosition;

    if (!to.hash) {
      return { x: 0, y: 0 };
    }

    position.selector = to.hash;

    if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
      return position;
    }
  },
});

export default router;
