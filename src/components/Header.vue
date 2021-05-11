<template>
  <header>
    <div id="menu">
      <div :key="option.id" v-for="option in options">
        <div v-show="option != `Exam Notes` && option != `Back`" @click="updateSubHeader(`main`, option)">
          <router-link :to="'/' + option">{{ option }}</router-link>
        </div>
        <div v-show="option == `Exam Notes`" @click="updateSubHeader(`sub`, option)">
          <router-link :to="'/' + option">{{ option }}</router-link>
        </div>
        <div v-show="option == `Back`" @click="updateSubHeader(`main`, option)">
          <router-link to="/Home">{{ option }}</router-link>
        </div>
      </div>
    </div>
  </header>
  <div id="topBanner">
    {{ subHeader }}
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
    //subHeader: String,
  },
  data() {
    return {
      options: [],
      subHeader: "Home",
      //isMenuChanged : false,
    };
  },
  methods: {
    updateSubHeader(theValue, theName) {
      if (theValue == "sub") 
        this.options = ["Back","Chin[<2023!]","Eng" ,"Math", "Phy", "Chem", "M2"];
      else if(theValue == "main")
        this.options = ["Home", "About", "Exam Notes", "Life Hack", "Info Tech", "Quotes"];
      this.subHeader = theName != "Back" ? theName : "Home";
    },
  },
  created(){
    this.options = ["Home", "About", "Exam Notes", "Life Hack", "Info Tech", "Quotes"];
  }
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
 #topBanner
 {
  font-size: 50px;
  width: 100%;
  height: 10%;
  margin: auto;
  position: fixed;
  z-index: 100;
  background: #c6f0c6;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: white;
  background: #c6f0c6;
}
hr {
  top: 12%;
}
</style>