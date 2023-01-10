<template>
  <div>
    <button @click="setColor('Red')">Red</button>
    <button @click="setColor('Blue')">Blue</button>
    <button @click="setColor('Green')">Green</button>
    <span>Color is: <strong>{{ selectedColor }}</strong></span>
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
