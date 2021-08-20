<template>

  <div class="blockCenter">
    <!-- <LeftMenu /> -->
    <p class="content" style="justify-content:left" :key="content_.id" v-for="content_ in content">
        ——{{content_}}<br />
    </p>
    <button>1234</button>
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    123
    <!-- <vue-mathjax :formula="formula">555</vue-mathjax> -->
  <math-jax :latex="formula" />
  <!-- <math-jax :latex="formula" :block="true" /> -->
    456
    <math-jax :latex="formula" />
    <div>{{formula}}</div>
  </div>
</template>


<script>
 //import LeftMenu from "../../components/LeftMenu";
//const VueMathjax = require('vue-mathjax');
// import MathJax from 'mathjax-vue' 
// import MathJax from '../../main'

export default {
  name: "M2",
  components:{
    // LeftMenu
    // MathJax
    // math-jax  : MathJax,
  },
  props: {},
  data() {
    return {
      content: "",
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac}\\sqrt{b^2-4ac} \\over 2a}.$$'
    };
  },
  methods: {
    //   reRender() {
    //   if(window.MathJax) {
    //     console.log('rendering mathjax');
    //     window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], () => console.log('done'));
    //   }
    // }
  },
  created() {
    this.content =[
      "Comming soon √a/√b =√(a/b)  123"
    ];
  },
  mounted() {
    // this.reRender();
  },
  watch: {
    // formula: function() {
    //   console.log('data changed')
    //   this.reRender();
    // }
  }
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