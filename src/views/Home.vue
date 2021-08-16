<template>
    <br>
    <div class="block" :key="content_.id" v-for="content_ in content">
      {{content_}}<br><br><hr style="width:60%">
    </div>
    <textarea style="width:40%">仍然在Development stage漫漫征途的路上。
10/6/2021
    </textarea>
</template>

<script>
export default {
    name: 'Home',
    props:{
        
    },
    data(){
        return {
            content: "",
        }
    },
    created(){
        this.content = [
        "這個網站收集對應考公開試的考生有幫助的資訊。多謝網友光臨！歡迎老師及同學們善用。",
        "在香港版權條例下，如果本人侵犯了閣下了的利益因而觸犯法例，請電郵聯絡本人同時附上閣下的證明，本人立即作出相應安排！",
        "本人未能確保所有本網站的內容對都是最新和完全準確，如果對閣下造成學業上負面影響，本人極之抱歉，請你來信告知！",
        "如有錯漏，本人極之抱歉。無論大小，請告知網主(電郵地址：winwinstudent1314@gmail.com)"
        ]
    }
}
</script>
<style scoped>
  .block {
    font-size: 19px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
</style>