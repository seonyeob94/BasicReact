<script setup>

import {ref} from "vue";
import MyInput from "./components/MyInput.vue";

const obj = ref(null);
const val = ref('hello')

const myclick=()=>{
  obj.value.value = "bye"
  val.value = 'bye'
}

</script>

<template>
  <input type="text" value="hello" ref="obj"/>
  <MyInput v-bind:value="val" ref="obj_value"/>
  <button @click="myclick">change Text</button>

</template>

<style scoped>

</style>
