<template>
  <p class="content" style="font-weight: bold">{{ content[0] }}<br /><br /></p>
  <div class="block">
    <ul>
      <li>
        ［多謝這位[St. Joseph’s Anglo-Chinese
        School]的物理老師及小卒會員WellPlayed］<br /><a
          target="blank"
          href="https://drive.google.com/drive/u/0/folders/1FNRRV9k3pWmEDk3Fkzc2x6qOXmWgU8dU"
          >按我進入Google Drive</a
        >
      </li>
      <li>
        ［多謝小卒會員terence313及Sherlock T. Wong］ <br />
        <a
          target="blank"
          href="https://drive.google.com/open?id=0Bz-HML99cdLTa2ZvejFWTkNhSlk"
          >按我進入Google Drive</a
        >
      </li>
      <li>
        ［多謝連登會員<a
          target="blank"
          href="https://lihkg.com/thread/1500572/page/1"
          >金娜娜</a
        >］<br /><a
          target="blank"
          href="https://www.dropbox.com/sh/qcm5vftbejqt0n3/AAAUwrLbYyDU9c7Vi8cLjYula?dl=0"
          >按我進入Drop box</a
        >
      </li>
      <li>
        ［多謝這位網友[DSExia HK]的Easy Notes Download］<br />
        <a
          target="blank"
          href="https://drive.google.com/drive/u/2/folders/10ZemZA56L_zVCq98c1Nd1NWSj9MbJhv8"
          >按我進入Google Drive</a
        >
      </li>
      <li>
        ［我把以上所有內容，全都放了在同一個Google Drive］<br />
        <a
          target="blank"
          href="https://drive.google.com/drive/u/0/folders/133aGG8zHaZjIXQ5wU91REMT_zLcHofPp"
          >按我進入Google Drive</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Exam",
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.content = [
      "這些都是從網上菓集得來的，可能來自［小卒］的站內搜索，至于本站將會自行組織筆記，以補網上資源之不足呢，中文將于2025年，Ｍ２則是2022年準備完成！有興趣以半學半做義工的網友，請聯絡我呢！",
      "．這個有中國語文，Bio，Chem，Core Maths ，Liberal studies，Ｍ1[全部都是 英文 ]",
    ];
  },
};
</script>
<style scoped>
li {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: left;
}
.block {
  font-size: 19px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>