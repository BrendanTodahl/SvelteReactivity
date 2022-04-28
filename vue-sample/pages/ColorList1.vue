<template>
  <div>
    <button @click="setColor('red')">red</button>
    <button @click="setColor('blue')">blue</button>
    <button @click="setColor('green')">green</button>
    <span>Color is: {{ selectedColor }}</span>
  </div>
</template>

<script>
export default {
  name: 'ColorList1',
  methods: {
    setColor (color) {
      this.selectedColor = color
    }
  },
  data () {
    return {
      selectedColor: ''
    }
  }
}
</script>
