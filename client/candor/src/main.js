import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import routes from './routes/index.js'

// setup defaults and globals
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueCookies)

VueCookies.config('7d')
VueCookies.set('theme','default')
VueCookies.set('hover-time','1s')

Axios.defaults.baseURL = process.env.API_ENDPOINT

new Vue({
  render: h => h(App),
}).$mount('#app')
