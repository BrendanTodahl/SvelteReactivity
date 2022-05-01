<script>
  let colors = ['Red', 'Blue', 'Green']
  let selectedColor = ''
  
  function setColor(color) {
    selectedColor = color
  }
</script>

{#each colors as color}
  <button on:click="{() => setColor(color)}">{color}</button>
{/each}
<span>Color is: <strong>{selectedColor}</strong></span>

<br/>
{#if !selectedColor}
  <span>Pick a color!</span>
{:else if selectedColor === 'Red'}
  <span>That's my favorite color!</span>
{:else}
  <span>That's almost as cool as Red!</span>
{/if}