<script>

import MyInput from "./lib/MyInput.svelte";

let obj = null;
let text = "hello";

const myclick = () =>{
    obj.value = "bye"
    text="bye"
}
</script>

<main>
    <input type="text" value="hello" bind:this={obj}/><br/>
    <MyInput value={text} /><br/>
    <button onclick={myclick}>change Text</button><br/>


</main>

<style>


</style>