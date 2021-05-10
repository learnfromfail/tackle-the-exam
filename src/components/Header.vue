<template>
  <header>
    <div id="menu">
      <div :key="option.id" v-for="option in options">
        <div v-show="option != `Exam` && option != `Back`">
          <router-link :to="'/' + option">{{ option }}</router-link>
        </div>
        <div v-show="option == `Exam`" @click="updateSubHeader(`sub`)">
          <router-link to="/">{{ option }}</router-link>
        </div>
        <div v-show="option == `Back`" @click="updateSubHeader(`main`)">
          <router-link to="/">{{ option }}</router-link>
        </div>
      </div>
    </div>
  </header>
  <div id="topBanner">
    <h3>{{ subHeader }}</h3>
  </div>
</template>

<script>
//  var isMenuChanged = false;

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Default Header",
    },
    // isMenuChanged: {
    //   type: Boolean,
    //   default: false
    // },
    subHeader: String,
  },
  data() {
    return {
      options: [
        "Home",
        "About",
        "Exam",
        //"Forum",
      ],
      //isMenuChanged : false,
    };
  },
  methods: {
    onCreate() {
      this.options = "";
    },
    updateSubHeader(theValue) {
      //isMenuChanged = !isMenuChanged;
      if (theValue == "sub") this.options = ["Back", "Math", "Phy", "Chem"];
      else this.options = ["Home", "About", "Exam"];
    },
  },
};
</script>
<style scoped>
#topBanner {
  width: 100%;
  height: 10%;
  top: 0px;
  display: flex;
  align-content: center;
}
 #topBanner, #topBanner h3
 {
  /* top:0px; */
  width: 100%;
  height: 10%;
  margin: auto;

  position: fixed;
  z-index: 100;
  background: white;
  border-bottom: 1px solid black;
}
#menu {
  top: 15%;
  left: 1%;
  font-family: sans-serif;
  padding: 5px;
  width: 130px;
  z-index: 100;
  position: fixed;
}
#menu div div {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  /*
    background: yellowgreen;
   */
}
hr {
  top: 12%;
}
</style>