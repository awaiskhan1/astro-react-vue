<script>
  import { todoLists } from "../../stores/lists"
    export default {
      data() {
        return {
          name: "",
        
        };
      },
      methods: {
        submitForm: function () {
          if (this.name) {
            const item = {
              text: this.name,
              id: todoLists.get().length + 1 || 1
            } 
            todoLists.set([...todoLists.get(), item])
            this.name = ''
          }
        }
      },
    };
</script>
<template>
  <div class="vue-app">
    <div class="vue-wrap">
      <h2 class="vue"><img :src="'/vue.png'" alt="Vue" /> Vue App</h2>
      <form @submit.prevent="submitForm" v-if="!formSubmitted">
       
        <input 
          class="input"
          v-model="name"
          type="text"
          placeholder="Enter your Todo Item" 
        /><br>
        
        <input 
          class="submit" 
          type="submit" 
          value="Submit"
        >
      </form>
      <hr />
    </div>
    <slot></slot>
    
  </div>
</template>
