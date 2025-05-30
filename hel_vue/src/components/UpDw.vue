<script setup>
import {onMounted, ref} from 'vue'


const com = ref(Math.floor(Math.random() * 99 + 1))
const mine = ref("")
const res = ref("")
const count = ref(0)
console.log(com.value)
const myclick = () => {
        let imine= Math.floor(mine.value)
        if(Number.isNaN(imine)||imine<1||imine>99){
          alert("1~99 사이의 숫자를 입력하세요")
          return;
        }

        let line = "";
        if (com.value == imine) {
            line = mine.value + "은(는)\t" + "정답\n";
            res.value+=line
             setTimeout(()=>{
                 alert(mine.value+" : " + count.value + "번 시도에 정답입니다")
             },100)

        } else if (com.value > imine) {
            line = mine.value + "은(는)\t" + "작다\n";
            res.value+=line
        } else {
            line = mine.value + "은(는)\t" + "크다\n";
            res.value+=line
        }

        count.value++

    }



const reset = () =>{
  com.value = Math.floor(Math.random() * 99 + 1)
  mine.value =""
  res.value =""
  count.value =0

console.log(com.value)
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
        <input type="button" value="리셋" @click="reset">
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
