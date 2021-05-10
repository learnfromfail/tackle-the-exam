<template>
    <h3>About</h3>
            <div :key="content_.id" v-for="content_ in content">
            {{content}}
        </div>
        1234
</template>

<script>
export default {
    name: 'About',
    props: {

    },
    data(){
        return {
            content: ["This is coming soon About"],
        }
    }
}
</script>