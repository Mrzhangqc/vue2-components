import Vue from 'vue'
import App from './App.vue'

import routes from './route'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'

Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
