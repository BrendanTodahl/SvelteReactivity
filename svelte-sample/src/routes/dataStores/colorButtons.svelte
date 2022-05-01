<script>
  import { color } from '../../stores/stores.js'
 
  function setColor(selectedColor) {
    color.set(selectedColor);
  }
</script>

<button on:click="{() => setColor('red')}">red</button>
<button on:click="{() => setColor('blue')}">blue</button>
<button on:click="{() => setColor('green')}">green</button>
