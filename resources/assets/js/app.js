/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
import App from './components/App.vue';


import Home from './components/Home/Home.vue';
import Agent from './components/Agent/Agent.vue';
import NotFound from './components/System/NotFound.vue';
import Client from './components/Client/Client.vue';


Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  // mode  : 'history',
  base  : __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/source', component: Agent},
    {path: '/client', component: Client},
    {path: '*', component: NotFound}
  ]
});


const app = new Vue({
  el    : '#app',
  router,
  render: h => h(App)
});

