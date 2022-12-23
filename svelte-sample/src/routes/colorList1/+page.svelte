<script>
  let selectedColor = ''
  
  function setColor(color) {
    selectedColor = color
  }
</script>

<button on:click="{() => setColor('Red')}">Red</button>
<button on:click="{() => setColor('Blue')}">Blue</button>
<button on:click="{() => setColor('Green')}">Green</button>
<span>Color is: <strong>{selectedColor}</strong></span>
