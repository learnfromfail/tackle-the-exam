<template>
    <p class="content" :key="content_.id" v-for="content_ in content">
        {{content_}}<br />
    </p>
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
        "這個網站收集對應考公開試的考生有幫助的資訊。多謝網友光臨！",
        "一切網站內容都是從網上菓集，在香港版權條例下，如果本人侵犯了閣下了的利益因而觸犯法例，請電郵聯絡本人同時附上閣下的證明，本人立即作出相應安排！",
        "本人未能確保所有本網站的內容對都是最新和完全準確，如果對閣下造成學業上負面影響，本人絕不負責！網站只是本人盡公民責任的努力，如果有錯漏，不免大小，請別加拘泥，盡快糾正告知本人！"
        ]
    }
}
</script>
<style scoped>
/* 
<div :key="content123.id" v-for="content123 in 100">
    {{content}}
</div>
*/
</style>