<script>

    let com = Math.floor(Math.random() * 99 + 1);
    let mine =""
    let res = ""
    let count = 0;
    console.log(com)
    const myclick = () => {
        let imine= Math.floor(mine)

        var line = "";
        if (com == imine) {
            line = mine + "은(는)\t" + "정답\n";
            res+=line
             setTimeout(()=>{
                 alert(mine +" : " + count + "번 시도에 정답을 맞췄습니다")
             },100)

        } else if (com > imine) {
            line = mine + "은(는)\t" + "작다\n";
            res+=line
        } else {
            line = mine + "은(는)\t" + "크다\n";
            res+=line
        }
        count++;

    }

</script>

<table>
    <tbody>
    <tr>
      <td>맞출수</td>
      <td>
        <input type="text" bind:value={mine}>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" value="맞춰보기" onclick={myclick}>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div id="mydiv">
          <pre>{res}</pre>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
<style>
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
