<template>
  <Header />
  <p class="header"><br/></p>
  <div style="min-height: 78vh">
    <router-view></router-view>
  </div>
  <Footer />
  <LeftMenu />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftMenu from "./components/LeftMenu";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    LeftMenu
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
p.content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 2% 20% 0% 20%; /* 上 右 下 左*/
}
.blockCenter{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
