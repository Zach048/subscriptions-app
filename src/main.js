import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import api from '@/common/api.config'

Vue.prototype.$api = api; // use api config globally in componenets 

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
