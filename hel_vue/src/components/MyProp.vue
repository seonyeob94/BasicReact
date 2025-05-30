<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  alt: String // 'alt'라는 이름의 String 타입 속성
});

</script>

<template>
 속성:<strong>{{ alt }}</strong>

</template>

<style scoped>

</style>
