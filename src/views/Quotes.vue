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
      "“君子戰雖有陳，而勇為本焉。喪雖有禮，而哀為本焉。士雖有學，而行為本焉。是故置本不安者，無務豐末。近者不親，無務來遠。親戚不附，無務外交。事無終始，無務多業。舉物而闇，無務博聞。”(墨子)",
      "“If you judge people, you have no time to love them.”(Mother Teresa)",
      "“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.”(Mother Teresa)",
      "“If we have no peace, it is because we have forgotten that we belong to each other.”(Mother Teresa)",
      "“What Consumes Your Mind Controls Your Life”",
      "“你可以成為一個好人，但絕不能成為被［他人利用你善良的］白痴！”(網主^_^)",
      "“軟弱的溫柔終究碌碌無為，如鋼鐵般的堅強意志下善良才是值要肯定！”(網主^_^)",
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