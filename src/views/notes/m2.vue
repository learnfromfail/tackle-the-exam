<template>

  <div class="blockCenter">
    <p class="content" style="justify-content:left" :key="content_.id" v-for="content_ in content">
        ——{{content_}}<br />
    </p>
    <button>1234</button>

    <textarea v-model="formula" cols="30" rows="10"></textarea>

    <math-jax :latex="formula" />
    <div>{{formula}}</div>
    <hr>

  </div>

</template>

<script>

export default {
  name: "M2",
  components:{

  },
  props: {},
  data() {
    return {
      content: "",
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac}\\sqrt{b^2-4ac} \\over 2a}.$$',
    };
  },
  methods: {
  },
  created() {
    this.content =[
      "Comming soon √a/√b =√(a/b)  123"
    ];
  },
  mounted() {

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