<script lang="ts">
  let msg: string = $state("Good Morning")
  const myclick = () => {
    msg = "Good Evening"
  }
</script>
<input type="text" value={msg}/>
<button onclick={myclick}>click</button>
