<script>
    let myInput;
    const myclick =()=>{
        myInput.focus();
    }

</script>

<input type="text" bind:this={myInput}/>
<button onclick={myclick}>FOCUS</button>
