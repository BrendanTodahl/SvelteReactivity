<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <input type="text" v-model="name" />
    <button @click="incrementCount">Clicks: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    incrementCount () {
      this.count++
    }
  },
  data () {
    return {
      name: 'World',
      count: 0
    }
  }
}
</script>
