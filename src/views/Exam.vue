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
    <br><br><br>
    <p class="left">
     ．這個有Physics及M2
    </p>
    <p class="left">
    <a target="blank" 
        href="https://drive.google.com/drive/u/0/folders/1FNRRV9k3pWmEDk3Fkzc2x6qOXmWgU8dU"
    >按我進入Google Drive</a> 
    &nbsp;［多謝這位[St. Joseph’s Anglo-Chinese School]的物理老師及小卒會員WellPlayed］ 
    </p>
    <br><br><br>
    <p class="left">
     ．這個有Econ
    </p>
    <p class="left">
    <a target="blank" 
        href="https://drive.google.com/open?id=0Bz-HML99cdLTa2ZvejFWTkNhSlk"
    >按我進入Google Drive</a> 
    &nbsp;［多謝小卒會員terence313］ 
    </p>
    <br><br>
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