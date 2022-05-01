<!-- Version 1 -->
<script>
  let name = 'World'
  let count = 0
 
  function nameChange(event) {
    name = event.target.value
  }
 
  function incrementCount() {
    count += 1
  }
</script>

<h1>Hello {name}!</h1>
<input type="text" value="{name}" on:input={nameChange} />
<button on:click="{incrementCount}">Clicks: {count}</button>

<!-- Version 2 -->
<!-- <script>
  $: name = 'World'
  let count = 0
</script>

<h1>Hello {name}!</h1>
<input type="text" bind:value="{name}" />
<button on:click="{() => count += 1}">Clicks: {count}</button> -->
