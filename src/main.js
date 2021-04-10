import Vue from 'vue';
import App from './App.vue';
import './assets/js/config';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.use(VueRouter);


const router = new VueRouter({ routes, mode: 'history' })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


