import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import $ from 'jquery'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/LayoutBase.css'

window.$ = require('jquery')
require('@/assets/jquery.blockUI.js')

// 1
//import '@/assets/magnific-popup/magnific-popup.css'
//require('@/assets/magnific-popup/jquery.magnific-popup.js')
// 2
// $ npm i magnific-popup
//import 'magnific-popup'
// 3
// $ npm install vue-expandable-image
import VueExpandableImage from 'vue-expandable-image'
Vue.use(VueExpandableImage)

Vue.config.productionTip = false

new Vue({
  $,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
