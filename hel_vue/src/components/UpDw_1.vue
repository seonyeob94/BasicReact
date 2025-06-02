<script setup>
import {onMounted, ref} from 'vue'

let mine = ref("")
let txt = ref("")
let com = 0

console.log("sdfsdf",com)

const myclick = () => {
  let imine = parseInt(mine.value);

  let line = "";

  console.log("1",com);
  console.log("2",imine);


  if (com == imine) {
    line = mine.value + "\t" + "정답<br/>\n";
    alert(mine.value + " 정답입니다.");
  } else if (com > imine) {
    line = mine.value + "\t" + "작다<br/>\n";
  } else {
    line = mine.value + "\t" + "크다<br/>\n";
  }
  console.log(line);

  txt.value += line
  mine.value = ""
}

onMounted(() => {
  com = parseInt((Math.random() * 99).toString()) + 1;
  console.log(com);
})


</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>맞출수</td>
      <td>
        <input type="text" v-model="mine">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" @click="myclick" value="맞춰보기">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div id="mydiv" v-html="txt"></div>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>
table, tr, td {
  border: 1px solid black;
}

input[type='text'] {
  width: 30px;
}

#mydiv {
  height: 150px;
}
</style>
