<template>
  <div class="sticky">
    <br /><br /><br />
     <span class="content" style="justify-content:left;margin-top:10px" :key="content_.id" v-for="(content_, index) in content">
        <router-link :to="'./' + hyperlink[index]" >{{index+1}}. {{content_}}</router-link>
    </span>
    
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  props: {},
  data() {
    return {
      content: "",
      hyperlink: "",
    };
  },
  methods: {},
  created() {
    this.content =[
      "Surds and Rationalization of Denominators",
      "Mathematical Induction",
      "Binomial Theorem",
      "Trigonometry",
      "Limits and the Number e",
      "Differentiation",
      "Applications of Differentiation",
      "Indefinite Integration and its Applications",
      "Definite Integration",
      "Applications of Definite Integration",
      "Matrices and Determinants",
      "Systems of Linear Equations",
      "Introduction to Vectors",
      "Scalar Products and Vector Products"
    ];
    this.hyperlink = [
      "Surd&Rational",
      "MathInduct",
      "BinoThm",
      "Trigo",
      "Limits&e",
      "Diff",
      "AppDiff",
      "IndefInteg",
      "DefInteg",
      "AppDefInteg",
      "Matrices&Determin",
      "LinearEqua",
      "Vector",
      "Scalar&VectorProducts"
    ];
  },
};
</script>
<style scoped>
leftMenu,
.container {

}


.sticky {
  position: fixed;
  word-wrap: break-word;
  top: 0%;
  /* bottom: 15%; */
  font-size: 16px;
  left: 0%;
  width: 12%;
  min-height: 100%;
  font-weight: bold;
  background: #c6f0c6;
  display: flex;
  flex-flow: column;
  justify-content:space-evenly
  /* align-items: center; */
}

</style>
