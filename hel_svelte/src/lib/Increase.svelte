<script>
    let count = "100"
    const myclick = () =>{
        let c= parseInt(count)
        c++;
        count=c.toString();
    }

</script>

{count}
<button onclick={myclick}>
    INCRESE
</button>
