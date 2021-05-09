<template>
    <header>
        <div id="menu">
          <div :key="option.id" v-for="option in options">
              {{option}}
          </div>
        </div>
    </header>
</template>

<script>
// const headerVariable = {
//     data(){
//       return {
//         options: [
//           "Home","About","Exam","Forum",
//         ]
//       }
//     }
// }


export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  data(){
    return {
      options: [
        "Home","About","Exam","Forum",
      ]
    }
  }
}
</script>
<style scoped>
 #menu{
    font-family: sans-serif;
    padding: 5px;;
    width: 130px;
    z-index: 100;
    position: fixed;
 }
 #menu div{
   margin: 10px;
   padding: 10px;
   border: 1px solid black;
   /*
    background: yellowgreen;
   */
 }
</style>