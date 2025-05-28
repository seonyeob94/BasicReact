<script setup>
import {onMounted, onUnmounted, ref} from 'vue'


const msg = ref("life01")
onMounted(()=>{
  console.log("Life01 Mounted")
})
onUnmounted(()=>{
  console.log("Life01 Unmounted")

})

</script>

<template>
  {{ msg }}

</template>

<style scoped>

</style>
