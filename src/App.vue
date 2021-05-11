<template>
  <Header :subHeader="'Welcome to be here!'" />
  <p class="header"><br /><br /><br /></p>
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
  margin: 2% 20% 0% 20%; /* 上左右下 */
}
</style>
