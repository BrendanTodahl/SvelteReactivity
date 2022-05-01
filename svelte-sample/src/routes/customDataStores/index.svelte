<script>
  import { color } from '../../stores/customStores.js'
  import ColorButtons from './colorButtons.svelte'
 
  let selectedColor

  color.subscribe(value => {
    selectedColor = value
  })
</script>

<ColorButtons></ColorButtons>

<h1>
  {selectedColor}
</h1>
