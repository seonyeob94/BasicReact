<script setup>
import {defineProps, ref} from 'vue'
console.log("myinput render")
const props = defineProps({
  mvalue : String
})

</script>

<template>

  <input type="text" v-bind:value="mvalue"/>

</template>

<style scoped>

</style>
