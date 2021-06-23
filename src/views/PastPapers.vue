<template>
    <p class="content" :key="content_.id" v-for="content_ in content">
        {{content_}}<br />
    </p>
 <br><hr style="width:60%">
  <div class="block">
    <a
      target="blank"
      href="https://drive.google.com/drive/folders/1vcrBvm7quJsG4uYpcF1NFmHAKXAEIDSg?usp=sharing"
      >按我進入Google Drive</a
    >&nbsp;<br />［多謝這位網友提供的By-topic的PastPaper］
  </div>
  <br><hr style="width:60%">
  <div class="block">
    <a
      target="blank"
      href="https://mmis.hkpl.gov.hk/hkcee-and-hkale-papers-collection"
      >&nbsp;HKCEE and HKALE Papers Collection</a
    ><br />
    [公共資源]
  </div>
  <br><hr style="width:60%">
  <div class="block">
    <a
      target="blank"
      href="https://drive.google.com/drive/folders/0By9lOB__2358WW5nY1RyTFhVQWM?usp=sharing"
      >&nbsp;主要以HKDSE 2013前各科 By-year的Past Paper</a
    >
    &nbsp;<br />［多謝這位網友DreamHome Cloud］
  </div>
  <br><hr style="width:60%">
  <div class="block">
    <br />使用方法：<br /><br />Past
    Paper是用來［清楚concept］的。每學完一個topic的哪裡，就做相關的試題，但是，學習所得的＂概念＂，是用來［一理通，百理白，舉一反三］（動詞）本身的，操練試題的目的，就是清楚勾勒概念，使之明晰化，細致化，具體定義！用營光筆記低下做錯的。下次只做錯的。以此類推，下一次只做上一次做錯的。假如部分題目是例外的，不循常理般能舉一反三，就獨特處理［By
    case］只能死記！
  </div>
  <br><hr style="width:60%">
  <div class="block">
    <p class="left">(註1)<br><br>知識產權處(教學與版權)<br><a href="www.ipd.gov.hk/chi/faq/copyrights/cpr_ed.html">參考資料I</a><br>
    <a href="https://www.ipd.gov.hk/chi/intellectual_property/copyright/Copyright_in_Education_tc.pdf">參考資料II</a>
    </p>
    <p class="left">

    </p>
  </div>
</template>

<script>
export default {
  name: "Pastpapers",
  data() {
    return {
      content: [
        "根據[知識產權署]網頁顯示(註1)，我不認為分享以下超連結作屬于侵犯版權！一切內容只作只作教學用途。歡迎老師們及同學們分享，運用，如有錯漏，請電郵告知。",
      ],
    };
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
  text-align: left;
}
</style>