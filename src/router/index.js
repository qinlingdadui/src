import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import About from '@/pages/About';
import News from '@/pages/News';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
});