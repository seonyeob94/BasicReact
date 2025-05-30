<script setup>
import {ref} from 'vue'
const myInputRef = ref(null);
const focusIput = () =>{
  if (myInputRef.value) {
    myInputRef.value.focus();
  }
}


</script>

<template>
  <input type="text" ref="myInputRef">
  <button @click="focusIput">focus</button>

</template>

<style scoped>

</style>
