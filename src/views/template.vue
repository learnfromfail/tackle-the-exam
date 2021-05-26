<template>
    <p class="content" :key="content_.id" v-for="content_ in content">
        {{content_}}<br />
    </p>
</template>

<script>
export default {
  name: "About",
  props: {},
  data() {
    return {
      content: "",
    };
  },
  methods: {},
  created() {
    this.content =[
      "This is the content."
    ];
  },
};
</script>
<style scoped>
</style>