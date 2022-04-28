<template>
  <div>
    <p>This paragraph is purple!</p>
    <child-component number="100" />
  </div>
</template>

<script>
import ChildComponent from '../components/ChildComponent.vue'

export default {
  name: 'Component',
  components: { ChildComponent }
}
</script>

<style scoped>
p {
  color: purple;
  font-size: 2em;
}
</style>
