<template>
  <div>
    <button v-for="color in colors" :key="color" @click="setColor(color)">{{ color }}</button>
    <span>Color is: <strong>{{ selectedColor }}</strong></span>

    <span class="d-block mt-2" v-if="!selectedColor">Pick a color!</span>
    <span class="d-block mt-2" v-else-if="selectedColor === 'Red'">That's my favorite color!</span>
    <span class="d-block mt-2" v-else>That's almost as cool as Red!</span>
  </div>
</template>

<script>
export default {
  name: 'ColorList2',
  methods: {
    setColor (color) {
      this.selectedColor = color
    }
  },
  data () {
    return {
      colors: ['Red', 'Blue', 'Green'],
      selectedColor: ''
    }
  }
}
</script>
