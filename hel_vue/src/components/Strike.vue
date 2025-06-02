<script setup>
import {onMounted, ref} from 'vue'

const num = ref("")
const res = ref("")
const arr = ref([])


const myclick =()=>{
  const arr1=[];
		for(let i=0;i<3;i++){
			arr1.push(parseInt(num.value.charAt(i)));
		}
	console.log(arr1)

	let cnt =0;
	let totalMatch =0;

	for(var i=0;i<3;i++){
			if(arr1[i]==arr.value[i]){
				cnt++;
			}
			if (arr1.includes(arr.value[i])) {
			    totalMatch++;
			  }
		}
	console.log(cnt)
	console.log(totalMatch)
	totalMatch=totalMatch-cnt;
	res.value+=num.value+" : "+cnt+"S "+totalMatch+"BB\n"

	if(cnt>2){
			 setTimeout(() => {
				    alert('정답입니다!');
				  }, 50);
		}
}

onMounted(()=>{
	 const temp=[];
		while(temp.length<3){

			const rand = Math.floor(Math.random()*9+1);
			if(!temp.includes(rand)) temp.push(rand);

		}
    arr.value =temp;
		console.log(arr.value)
})

</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>맞출수</td>
      <td>
        <input type="text" v-model="num"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" value="맞춰보기" @click="myclick"/>
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
   input[type=text]{
        width: 40px;
    }
    div{
        height: 170px;
    }
    table,td,tr{
        border: 1px solid aqua;
    }
</style>
