import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/';
import Build from '@/pages/Build/';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/build',
      name: 'Build',
      component: Build,
    },
  ],
});
