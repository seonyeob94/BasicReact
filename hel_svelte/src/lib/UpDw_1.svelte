<script>
import {onMount} from "svelte";

let mine = ""
let txt = ""
let com = 0

console.log("sdfsfffdsf",com);

const myclick = () => {
	let imine = parseInt(mine);

	let line = "";

	if(com==imine){
		line = mine+"\t"+"정답<br/>";
		alert(mine+" 정답입니다.");
	}else if(com>imine) {
		line = mine+"\t"+"작다<br/>";
	}else{
		line = mine+"\t"+"크다<br/>";
	}

	txt += line
	mine = ""
}

onMount(()=>{
	com = parseInt((Math.random()*99).toString())+1;
	console.log(com);
})


</script>

<table>
    <tbody>
	<tr>
		<td>맞출수</td>
		<td>
			<input type="text" bind:value={mine} >
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<input type="button" onclick={myclick} value="맞춰보기">
		</td>
	</tr>
		<tr>
		<td colspan="2">
			<div id="mydiv">{@html txt}</div>
		</td>
	</tr>
    </tbody>
</table>

<style>
    table,tr,td{
        border: 1px solid black;
    }
    input[type='text']{
        width: 30px;
    }
    #mydiv{
        height: 150px;
    }
</style>
