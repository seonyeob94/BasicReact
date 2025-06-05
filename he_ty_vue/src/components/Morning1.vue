<script setup lang="ts">
import { ref } from 'vue'


const msg = ref<string>("Good Morning");

const myclick = () =>{
  msg.value='Good Evening'
}
</script>

<template>

    <input type="text" v-model="msg">
    <input type="text" v-bind:value="msg">
    <button @click="myclick">click</button>

</template>

<style scoped>

</style>
