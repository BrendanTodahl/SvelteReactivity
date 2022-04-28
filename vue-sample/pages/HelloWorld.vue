<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <input type="text" v-model="name" />
    <button @click="incrementCount">Clicks: {{ numClicks }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    incrementCount () {
      this.numClicks++
    }
  },
  data () {
    return {
      name: 'World',
      numClicks: 0
    }
  }
}
</script>
