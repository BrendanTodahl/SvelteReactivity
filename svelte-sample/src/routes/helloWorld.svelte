<script>
  $: name = 'World';
  let count = 0;
</script>

<h1>Hello {name}!</h1>
<input type="text" bind:value="{name}" />
<button on:click="{() => count += 1}">Clicks: {count}</button>