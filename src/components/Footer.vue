<template>
  <br /><br /><br />
  <div class="container">
    <br /><br /><br />
    <div class="left"></div>
    <div class="middle">
      <!-- <div style="display:inline">1234</div> -->
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>
<style scoped>
footer,
.container {
  width: 100%;
  height: 100%;
  background: #c6f0c6;
  display: block;
}
.left {
  float: left;
  width: 33%;
}
.middle {
  float: left;
  width: 34%;
}
.right {
  float: left;
  width: 33%;
}

.left,
.right,
.middle {
  background: #c6f0c6;
  height: 100%;
}
</style>
