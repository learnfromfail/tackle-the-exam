<template>

  <div class="blockCenter">
    <!-- <LeftMenu /> -->
    <p class="content" style="justify-content:left" :key="content_.id" v-for="content_ in content">
        ——{{content_}}<br />
    </p>
    <button>1234</button>
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    <vue-mathjax :formula="formula"></vue-mathjax>
  </div>
</template>


<script>
 //import LeftMenu from "../../components/LeftMenu";
//const VueMathjax = require('vue-mathjax');
import  VueMathjax from "vue-mathjax";

export default {
  name: "M2",
  components:{
    // LeftMenu
    'vue-mathjax': VueMathjax
  },
  props: {},
  data() {
    return {
      content: "",
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'

    };
  },
  methods: {},
  created() {
    this.content =[
      "Comming soon √a/√b =√(a/b) "
    ];
  },
};
</script>
<style scoped>
 p {
    font-size: 20px;
    padding-top: 11px;
    padding-bottom: 11px;
 }
  p.content {
    text-align: left;
    font-weight: bold;
 }
</style>