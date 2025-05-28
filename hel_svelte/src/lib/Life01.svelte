<script>
    import {onDestroy, onMount} from "svelte";

    let msg = "Life01"
    onMount(()=>{
        console.log("life01 onMount")
    })
    onDestroy(()=>{
        console.log("life01 onDestroy")

    })
</script>

{msg}

