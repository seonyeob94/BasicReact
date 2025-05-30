<script>
import {onMount} from "svelte";
let num =""
let res =""
let arr=[];

onMount(()=>{
	 arr=[];
		while(arr.length<3){

			const rand = Math.floor(Math.random()*10);
			if(!arr.includes(rand)) arr.push(rand);

		}
		console.log(arr)
})

const myclick = ()=>{
	const arr1=[];
		for(let i=0;i<3;i++){
			arr1.push(parseInt(num.charAt(i)));
		}
	console.log(arr1)

	let cnt =0;
	let totalMatch =0;

	for(var i=0;i<3;i++){
			if(arr1[i]==arr[i]){
				cnt++;
			}
			if (arr1.includes(arr[i])) {
			    totalMatch++;
			  }
		}
	console.log(cnt)
	console.log(totalMatch)
	totalMatch=totalMatch-cnt;
	res+=num+" : "+cnt+"스크라이크"+totalMatch+"볼\n"

	if(cnt>2){
			 setTimeout(() => {
				    alert('🎉 정답입니다!');
				  }, 50);
		}
}


</script>

<table>
    <tbody>
		<tr>
			<td>맞출수</td>
			<td>
				<input type="text" bind:value={num}>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="button" value="맞춰보기" on:click={myclick}>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<div id="mydiv"><pre>{res}</pre></div>
			</td>
		</tr>
    </tbody>
	</table>
<style>
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