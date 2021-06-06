<template>
  <div class="blockCenter">
    <p class="content" style="justify-content:left" :key="content_.id" v-for="content_ in content">
        ——{{content_}}<br />
    </p>
  </div>
</template>

<script>
export default {
  name: "Quotes",
  props: {},
  data() {
    return {
      content: "",
    };
  },
  methods: {},
  created() {
    this.content =[
      "“It is never too late to do the right thing./做有意義的事，永遠不會嫌遲！”",
      "“Your future is hidden in your daily routine.”",
      "“Not all readers are leaders, but all leaders are readers.”(Harry S. Truman)",
      "“志不彊者智不達，言不信者行不果。據財不能以分人者，不足與友。”(墨子)",
      "“If you judge people, you have no time to love them.”(Mother Teresa)",
      "“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.”(Mother Teresa)",
      "“If we have no peace, it is because we have forgotten that we belong to each other.”(Mother Teresa)",
      "“What Consumes Your Mind Controls Your Life”"
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