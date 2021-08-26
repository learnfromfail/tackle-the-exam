<template>
    <div id="demo">
      <h1>{{whoPeople}}: 'Hello Vue.js!'</h1>
      <input v-model="whoPeople">
    </div>

    <button @click="count++">
      You clicked me {{ count }} times. <span>{{counter}}</span>
    </button>

    <div id="bind-attribute">
      <span v-bind:title="message"> <!-- v-on: = @ but v-bind: != @ -->
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </div>


    <div id="event-handling">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>

    <div id="list-rendering">
    <ol>
      <li v-bind:key="todo.index"  v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
</div>
</template>
<script>
// import pageOne from "../notes/maths/1/pageOne.vue";
export default {
    name: "Display",
    props:{

    },
    data(){
      return {
      content: "",

      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac}\\sqrt{b^2-4ac} \\over 2a}.$$',

      whoPeople: "Who",

      count: 0,

      counter: 0,

      message: 'You loaded this page on ' + new Date().toLocaleString() ,

      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],

      //

      };
    },
    components:{
      // pageOne,
    },
    created() {
      this.content =[
        "Comming soon √a/√b =√(a/b)  123"
      ];
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    },
    methods:{
      reverseMessage() {
        this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
    }
}
</script>
<style scoped>
  
</style>