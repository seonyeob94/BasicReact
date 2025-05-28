<script>

	let nums= Array(6).fill("--");
    const myclick = () => {
        const arr=[];
		while(arr.length<6){

			let rand = Math.floor(Math.random()*45+1);
			if(!arr.includes(rand)) arr.push(rand);

		}

		/*arr.sort( function(a, b){

		 	return a-b;
		});*/
		/*let tnt=0;
		for(let i=0;i<arr.length-1;i++){
			for(let j=0;j<arr.length-1;j++){
				if(arr[j]>arr[j+1]){
					tnt=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=tnt

				}
			}
		}*/
		for(let i=0;i<5;i++){
			for(let j=0;j<5-i;j++){
				if(arr[j]>arr[j+1]){
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

				}
			}
		}


		console.log(arr);

		//nums=arr;
		nums = arr.map(n => n < 10 ? `0${n}` : `${n}`);
    }
</script>

<table>
    <tbody>
	<tr>
		{#each nums as num}
		<td><span class="myspan">{num}</span></td>
		{/each}
	</tr>
	<tr>
		<td colspan="6">
			<button on:click={myclick}>로또 생성하기</button>
		</td>
	</tr>
	</tbody>
</table>
<style>
	table,tr,td{
		border: 1px solid gray;
	}
	td{
		width: 20px;
	}
</style>