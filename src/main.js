import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import request from "./api/request";
//
// Vue.use(request)
Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
