<template>
  <div class="blockCenter">
    <LeftMenu />
    <p class="content" style="justify-content:left" :key="content_.id" v-for="content_ in content">
        ——{{content_}}<br />
    </p>
  </div>
</template>

<script>
import LeftMenu from "../../components/LeftMenu";

export default {
  name: "M2",
  components:{
    LeftMenu
  },
  props: {},
  data() {
    return {
      content: "",
    };
  },
  methods: {},
  created() {
    this.content =[
      "Comming soon"
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