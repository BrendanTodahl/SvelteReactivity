<script>
  import { color } from '../../stores/customStores.js'
</script>

<button on:click="{() => color.setColor('red')}">red</button>
<button on:click="{() => color.setColor('blue')}">blue</button>
<button on:click="{() => color.setColor('green')}">green</button>
