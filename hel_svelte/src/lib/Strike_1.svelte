<script>
    import {onMount} from "svelte";

    let mine = ""
    let txt = ""
    let com = "123"


    onMount(() => {
        let arr9 = [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ];

        for (let i = 0; i < 1000; i++) {
            let rnd = parseInt((Math.random() * 9).toString());
            let temp = arr9[0];
            arr9[0] = arr9[rnd];
            arr9[rnd] = temp;
        }
        com = arr9[0] + "" + arr9[1] + "" + arr9[2];
        console.log("com", com);
    })

    const myclick = () => {
        let s = getS(com, mine);
        let b = getB(com, mine);

        let line = `${mine}\t${s}S${b}B<br/>`;
        if (s == 3) {
            setTimeout("alert(" + mine + "+''+'축하합니다.')")
        }
        txt = txt + line
        mine = ""

    }

    const getS = (com, mine) => {
        let ret = 0;

        let c1 = com.substring(0, 1);
        let c2 = com.substring(1, 2);
        let c3 = com.substring(2, 3);
        let m1 = mine.substring(0, 1);
        let m2 = mine.substring(1, 2);
        let m3 = mine.substring(2, 3);

        if (c1 == m1) ret++;
        if (c2 == m2) ret++;
        if (c3 == m3) ret++;

        return ret;
    }

    const getB = (com, mine) => {
        let ret = 0;

        let c1 = com.substring(0, 1);
        let c2 = com.substring(1, 2);
        let c3 = com.substring(2, 3);
        let m1 = mine.substring(0, 1);
        let m2 = mine.substring(1, 2);
        let m3 = mine.substring(2, 3);

        if (c1 == m2 || c1 == m3) ret++;
        if (c2 == m1 || c2 == m3) ret++;
        if (c3 == m1 || c3 == m2) ret++;

        return ret;
    }


</script>


<table>
    <tbody>
    <tr>
        <td>맞출수</td>
        <td>
            <input type="text" bind:value={mine}/>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <input type="button" onclick={myclick} value="맞춰보기"/>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <div>{@html txt}</div>
        </td>
    </tr>

    </tbody>

</table>
<style>
    input[type=text] {
        width: 40px;
    }

    div {
        height: 170px;
    }

    table, tr, td {
        border: 1px solid aqua;
    }

</style>
