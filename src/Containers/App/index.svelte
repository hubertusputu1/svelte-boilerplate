<script>
  import { count } from "../../Stores/index";
</script>

<style src="./style.scss">

</style>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>
