<template>
  <div class="container">
     <p class="content" style="justify-content:left" :key="content_.id" v-for="content_ in content">
        #{{content_}}<br /><br />
    </p>
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  props: {},
  data() {
    return {
      content: "",
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
  },
};
</script>
<style scoped>
leftMenu,
.container {
  width: 20%;
  height: 80%;
  font-weight: bold;
  background: palegreen;
  display: block;
}


.left,
.right,
.middle {
  background: #c6f0c6;
  height: 100%;
}
</style>
