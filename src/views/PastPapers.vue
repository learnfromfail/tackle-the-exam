<template>
  <p class="content" :key="content_.id" v-for="content_ in content">
    {{ content_ }}<br />
  </p>
  <p class="left">
    <a
      target="blank"
      href="https://drive.google.com/drive/folders/1vcrBvm7quJsG4uYpcF1NFmHAKXAEIDSg?usp=sharing"
      >按我進入Google Drive</a
    >&nbsp;［多謝這位網友提供的By-topic的PastPaper］
  </p>
  <p class="left">
    <a
      target="blank"
      href="https://mmis.hkpl.gov.hk/hkcee-and-hkale-papers-collection"
      >&nbsp;HKCEE and HKALE Papers Collection</a
    >
    [公共資源]
  </p>
    <p class="left">
    <a
      target="blank"
      href="https://drive.google.com/drive/folders/0By9lOB__2358WW5nY1RyTFhVQWM?usp=sharing"
      >&nbsp;主要以HKDSE 2013前各科 By-year的Past Paper</a
    >
    &nbsp;［多謝這位網友DreamHome Cloud］
  </p>
  <p class="content">
    <br />使用方法：<br /><br />Past
    Paper是用來［清楚concept］的。每學完一個topic的哪裡，就做相關的試題，但是，學習所得的＂概念＂，是用來［一理通，百理白，舉一反三］（動詞）本身的，操練試題的目的，就是清楚勾勒概念，使之明晰化，細致化，具體定義！用營光筆記低下做錯的。下次只做錯的。以此類推，下一次只做上一次做錯的。假如部分題目是例外的，不循常理般能舉一反三，就獨特處理［By case］只能死記！
  </p>
  <p class="left">註1:</p>
  <p class="left">
      www.ipd.gov.hk/chi/faq/copyrights/cpr_ed.htm
  </p>
  <p class="left">
      https://www.ipd.gov.hk/chi/intellectual_property/copyright/Copyright_in_Education_tc.pdf
  </p>
</template>

<script>
export default {
  name: "Pastpapers",
  data() {
    return {
      content: [
        "根據[知識產權署]網頁顯示(註1)，我不認為分享以下超連結屬于侵犯版權！歡迎老師們及同學們分享，運用",
      ],
    };
  },
};
</script>
<style scoped>
p{
    overflow-wrap: anywhere;
}
a,
span {
  display: flex;
  align-items: center;
  justify-content: left;
}
p.left {
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  margin: 1.5% 20% 0% 20%;
}
</style>