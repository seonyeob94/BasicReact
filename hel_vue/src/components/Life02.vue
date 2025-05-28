<script setup>
import {onMounted, onUnmounted, ref} from 'vue'


const msg = ref("life02")
onMounted(()=>{
  console.log("Life02 Mounted")
})
onUnmounted(()=>{
  console.log("Life02 Unmounted")

})

</script>

<template>
  {{ msg }}

</template>

<style scoped>

</style>
