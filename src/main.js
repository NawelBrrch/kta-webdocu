import Vue from "vue";
import VuePageTransition from "vue-page-transition";
import Vue2TouchEvents from 'vue2-touch-events'

import App from "./App.vue";
import router from "./javaScript/router";

Vue.use(VuePageTransition);
Vue.use(Vue2TouchEvents);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
