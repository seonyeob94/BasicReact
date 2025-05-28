<script setup>
import {ref} from 'vue'


const com = ref(Math.floor(Math.random() * 99 + 1))
const mine = ref("")
const res = ref("")
console.log(com.value)
const myclick = () => {
        let imine= Math.floor(mine.value)

        var line = "";
        if (com.value == imine) {
            line = mine.value + "은(는)\t" + "정답\n";
            res.value+=line
             setTimeout(()=>{
                 alert(mine.value + " 정답입니다")
             },100)

        } else if (com.value > imine) {
            line = mine.value + "은(는)\t" + "작다\n";
            res.value+=line
        } else {
            line = mine.value + "은(는)\t" + "크다\n";
            res.value+=line
        }


    }

</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>맞출수</td>
      <td>
        <input type="text" v-model="mine" >
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" value="맞춰보기" @click="myclick">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div id="mydiv">
          <pre>{{ res }}</pre>
        </div>
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
