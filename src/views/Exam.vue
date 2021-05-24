<template>
    <p class="content" style="font-weight: bold;">{{content[0]}}<br><br>
    </p>
    <p class="left">{{content[1]}}<br>
    </p>
    <p class="left">
    <a target="blank" 
    href="https://drive.google.com/drive/u/2/folders/10ZemZA56L_zVCq98c1Nd1NWSj9MbJhv8"
    >按我進入Google Drive</a>
    &nbsp;［多謝這位網友[DSExia HK]的Easy Notes Download］
    </p>
    <p class="left">
     ．這個有Physics及M2
    </p>
    <p class="left">
    <a target="blank" 
        href="https://drive.google.com/drive/u/0/folders/1FNRRV9k3pWmEDk3Fkzc2x6qOXmWgU8dU"
    >按我進入Google Drive</a> 
    &nbsp;［多謝這位[St. Joseph’s Anglo-Chinese School]的物理老師及小卒會員WellPlayed］ 
    </p>
    <p class="left">
     ．這個有Econ
    </p>
    <p class="left">
    <a target="blank" 
        href="https://drive.google.com/open?id=0Bz-HML99cdLTa2ZvejFWTkNhSlk"
    >按我進入Google Drive</a> 
    &nbsp;［多謝小卒會員terence313及Sherlock T. Wong］ 
    </p>
    <p class="left">
     ．這個有English
    </p>
    <p class="left">
    <a target="blank" 
        href="https://www.dropbox.com/sh/qcm5vftbejqt0n3/AAAUwrLbYyDU9c7Vi8cLjYula?dl=0"
    >按我進入Drop box</a> 
    &nbsp;［多謝連登會員<a target="blank" 
        href="https://lihkg.com/thread/1500572/page/1"
    >金娜娜</a> ］ 
    </p>
    <p class="left" style="color: red;font-weight: bold;">
     ．某位網友 把 所有notes放在同一個Drive，比便大家一併過下載吧！
    </p>
    <p class="left" style="color: red;font-weight: bold;">
    <a target="blank" 
        href="https://drive.google.com/drive/u/0/folders/133aGG8zHaZjIXQ5wU91REMT_zLcHofPp"
    >按我進入Google Drive</a> 
    &nbsp;［感謝天地感謝世界］ 
    </p>
</template>

<script>
export default {
    name: 'Exam',
    data(){
        return {
            content: "",
            
        }
    },
     created() {
    this.content =[
        "這些都是從網上菓集得來的，可能來自［小卒］的站內搜索",
        "．這個有中國語文，Bio，Chem，Core Maths ，Liberal studies，Ｍ1[全部都是 英文 ]"

    ];
  },
}
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