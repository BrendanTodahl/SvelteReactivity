<script>
  let selectedColor = '';
  
  function setColor(color) {
    selectedColor = color;
  }
</script>

<button on:click="{() => setColor('red')}">red</button>
<button on:click="{() => setColor('blue')}">blue</button>
<button on:click="{() => setColor('green')}">green</button>
<span>Color is: {selectedColor}</span>