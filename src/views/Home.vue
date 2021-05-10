<template>
    <div :key="content123.id" v-for="content123 in 100">
        {{content}}
    </div>
</template>

<script>
export default {
    name: 'Home',
    props:{
        
    },
    data(){
        return {
            content: ["This is the content telling that `This is coming soon Home`, I am Web master require some time, you know?"],
        }
    }
}
</script>
<style scoped>
    div{
        font-size: 25px;
    }
</style>