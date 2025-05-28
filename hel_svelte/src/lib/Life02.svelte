<script>
    import {onDestroy, onMount} from "svelte";

    let msg = "Life02"
    onMount(()=>{
        console.log("life02 onMount")
    })
    onDestroy(()=>{
        console.log("life02 onDestroy")

    })
</script>

{msg}

