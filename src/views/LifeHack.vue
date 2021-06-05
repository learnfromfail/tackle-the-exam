<template>
    <p class="content" :key="content_.id" v-for="content_ in content">
        {{content_}}<br />
    </p>
    <div class="block" style="margin-left:auto">
      <a href="https://www.cw.com.tw/article/5073759" target="_blank">
      哈佛大學長達75年的「快樂」研究：美好人生建立於良好關係
      </a>今時今日考DSE讀者應該不會理解昔日舊制會考及高考公開試，競爭的激烈是如何破壞人性。如果話香港人一盤散沙，沙粒之間的凝聚力＂大部分＂的耗損一定來自公開試。在我成長時，入唔到大學同判死刑分別不大（上流空間有限，除非你外表格外吸引，或者能發展表演或其他與眾不同的技能和材華，不然可能會平平凡凡沉沉悶悶穩穩定定過。）
    </div>
    <br>

    <div class="block">
      <a href="https://www.youtube.com/watch?v=okktHJPyVKA" target="_blank">
      如何增強記憶力？福爾摩斯「思維宮殿」 5步驟記憶法大揭密 | Why學生
      </a><br>我細個就係因為死記硬背，用左最蠢的方法記要考核的內容，抄寫一次，望多幾下或者早晚望多幾下，就自然記到。我記起當年考ALevel個時，考inorganic Chem，資料太煩多，剛剛記完，不久又忘記。為了根治自己極差的記憶力，我資料搜集過一輪(Youtube)，並歸納以下法則：<br>
    </div>

    <div class="block">
      <ul>
        <li>充足睡眠，切忌通頂，記憶在睡眠中得到鞏固［習］</li>
        <li>字首併個組合，死記個組合［眼］</li>
        <li>作一首押韻的詩，音樂感［氫氦鋰鈹硼 碳氮氧氟氖］［耳／口］</li>
        <li>故事化，圖像及動漫化［意／眼］</li>
        <li>抄寫記憶法組織下的筆記［身］</li>
        <li>來回學校時，在足夠安全的情況下，邊行邊搬入到［身］</li>
        <li>主動在記憶曲線之間定時複習，主動回憶［意］</li>
        <li>主動分享教人，腦海轉一次及口述一次，教學雙長［心／身／口］</li>
        <li>記憶宮殿［大技］</li>
        <li>心態：積極，樂觀，正面，開心，好玩！勿恐慌性壓力爆膨［心］</li>
      </ul>
    </div>
    
    <div class="block">

    </div>

</template>

<script>
export default {
  name: "LifeHack",
  props: {},
  data() {
    return {
      content: "",
    };
  },
  methods: {},
  created() {
    this.content =[
      ""
    ];
  },
};
</script>
<style scoped>
  .block {
    font-size: 19px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>