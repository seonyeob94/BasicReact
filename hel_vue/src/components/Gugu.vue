<script setup>
import {ref} from 'vue'


const dan = ref("")
const result = ref("")

const myclick = () => {
  let num = parseInt(dan.value);

  let str = '';
  for (let i = 1; i <= 9; i++) {
    str += `${num} x ${i} = ${num * i}\n`;
  }
  result.value = str;
}
</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>출력단수</td>
      <td>
        <input type="text" v-model="dan"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" value="출력하기" @click="myclick"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <textarea rows="13" cols="17">{{result}}</textarea>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>
table, tr, td {
  border: 1px solid gray;
}

input[type='text'] {
  width: 40px;
}
</style>
