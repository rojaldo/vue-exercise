import Vue from 'vue'
import App from './App.vue'

import Fragment from 'vue-fragment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
Vue.use(VueYoutube)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
