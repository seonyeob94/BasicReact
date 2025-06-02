<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  alt: {
    type: String,
    default: ''         // 필요시 기본값
  },
  src: {
    type: String,
    required: true      // 필수 prop
  }
})


</script>

<template>
 속성:<strong>{{ alt }}</strong>
<img    :src="src"
  />
</template>

<style scoped>

</style>
