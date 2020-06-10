import Vue from "vue";
import VuePageTransition from "vue-page-transition";

import App from "./App.vue";
import router from "./javaScript/router";

import "./scss/global/_global.scss";

Vue.use(VuePageTransition);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
