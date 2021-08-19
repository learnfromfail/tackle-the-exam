

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//const VueMathjax = require('vue-mathjax');
//import  VueMathjax from "vue-mathjax";

createApp(App)
  .use(router)
  .mount("#app");
  //.use(VueMathjax);
