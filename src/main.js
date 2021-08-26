

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// createApp.config.productionTip = false;

import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue'
import {VueMathjax} from 'vue-mathjax'
//const VueMathjax = require('vue-mathjax');
//import  VueMathjax from "vue-mathjax";

function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('elementId')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}

initMathJax({}, onMathJaxReady)

createApp(App)
  .use(router)
  .mount("#app")
  .use(MathJax)
  .use(VueMathjax);
