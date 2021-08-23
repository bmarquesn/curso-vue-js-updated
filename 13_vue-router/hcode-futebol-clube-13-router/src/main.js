import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'

Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
