/*
--
npm i jquery
npm i jquery-blockui
vue add router
vue add vuex
	--npm i vuex-persistedstate
	--npm i secure-ls
	--npm i vue-jwt-decode
vue add bootstrap-vue
--npm i --save axios vue-axios
vue add fontawesome
--
npm i vue-expandable-image
--
// 1
//import '@/assets/magnific-popup/magnific-popup.css'
//require('@/assets/magnific-popup/jquery.magnific-popup.js')
// 2
// $ npm i magnific-popup
//import 'magnific-popup'
// 3
// $ npm install vue-expandable-image
--
*/
import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// load base CSS of Layout
import "@/assets/LayoutBase.css";

// Enable jQuery and BlockUI
import $ from "jquery";
window.$ = $;
window.jQuery = $;
require("@/assets/jquery.blockUI.js");

import VueExpandableImage from "vue-expandable-image";
Vue.use(VueExpandableImage);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
