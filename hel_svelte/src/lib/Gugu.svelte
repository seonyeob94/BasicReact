<script>
    let dan = "...";
    let result = "...";

    const myclick = () => {
        let num = parseInt(dan);

        let str = '';
        for (let i = 1; i <= 9; i++) {
            str += `${num} x ${i} = ${num * i}\n`;
        }
        result = str;
    }

</script>


<table>
    <tbody>
    <tr>
        <td>출력단수</td>
        <td>
            <input type="text" bind:value={dan}/>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <button on:click={myclick}>
                출력하기
            </button>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <textarea rows="13" cols="17" value={result}/>
        </td>
    </tr>
    </tbody>
</table>

<style>
    table, tr, td {
        border: 1px solid gray;
    }

    input[type='text'] {
        width: 40px;
    }

</style>

