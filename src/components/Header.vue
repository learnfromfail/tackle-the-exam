<template>
  <div id="topBanner">
    <div class="BannerSon" style="width:70%;white-space: nowrap">
      <div class="BannerSon BannerSonLeft" style="justify-content:flex-start;width:10%;margin-right:8%">
        <img style="width:40%;padding-top:35%;min-width: 160px" src="@/assets/WebLogo2.svg" alt="logo">
      </div>
      <div :key="option.id" v-for="option in options" class="ArraysOption"> 
          <div v-show="option != `Back` && !array3.includes(option) && !array2.includes(option)">
            <router-link :to="'/' + option" @click="updateSubHeader(`main`, option)">{{ option }}</router-link> |
          </div>
          <div v-show="array2.includes(option)">
            <router-link :to="'/ExamNotes/'+option" @click="updateSubHeader(`sub`, option)">{{ option }}</router-link> |
          </div>
          <div v-show="option == `Exam Notes`">
            <router-link to="/ExamNotes/" @click="updateSubHeader(`sub`, option)">{{ option }}</router-link> |
          </div>
          <div v-show="option == `Past Papers`">
            <router-link to="/PastPapers" @click="updateSubHeader(`main`, option)">{{ option }}</router-link> |
          </div>  
          <div v-show="option == `Life Hack`">
            <router-link to="/LifeHack" @click="updateSubHeader(`main`, option)">{{ option }}</router-link> |
          </div>  
          <div v-show="option == `Info Tech`">
            <router-link to="/InfoTech" @click="updateSubHeader(`main`, option)">{{ option }}</router-link> |
          </div>  
          <div v-show="option == `Back`">
            <router-link to="/Home" @click="updateSubHeader(`main`, option)">{{ option }}</router-link> |
          </div>
      </div>
    </div>
    <div class="BannerSon" style="width:30%"></div>
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
      array1: [],
      array2: [],
      subHeader: "Home",
      //isMenuChanged : false,
      variAble: "hello my fd"
    };
  },
  methods: {
    updateSubHeader(theValue, theName) {
      if (theValue == "sub") 
        this.options = ["Back"/*,"Chin[<2025!]","Eng[<2024!]" ,"Math[<2023!]", "Phy[<2024!]", "Chem[<2024!]"*/, "M2[<2022!]"];
      else if(theValue == "main")
        this.options = ["Home", "About", "Exam Notes", "Past Papers", "Life Hack", "Info Tech", "Quotes",/*, "Updates"*/];
      this.subHeader = theName != "Back" ? theName : "Home";
    },
    mouseOver(id){
      console.log(id);
    },
  },
  created(){
    this.array1 = ["Home", "About", "Exam Notes", "Past Papers", "Life Hack", "Info Tech", "Quotes"/*, "Updates"*/];
    this.options = this.array1;
    this.array2 = [/*"Chin[<2025!]","Eng[<2024!]" ,"Math[<2023!]", "Phy[<2024!]", "Chem[<2024!]",*/ "M2[<2022!]"];//not finished
    this.array3 = ["Exam Notes","Past Papers" ,"Life Hack", "Info Tech"];//spaces
  }
};
</script>
<style scoped>
 #topBanner
 {
  top: 0%;
  font-size: 20px;
  width: 100%;
  height: 10%;
  /* margin: auto; */
  position: fixed;
  z-index: 100;
  background: #c6f0c6;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
}
.BannerSon{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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
}
hr {
  top: 12%;
}
#menu div div :hover{
  border-bottom: 2px solid blue;
  padding: -1px
}
#topBanner div ~ div{
  margin: 2px;
}
</style>