<template>
  <div>
    <p>This paragraph is not purple</p>
    <span>The value of number is: {{ number }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    number: {
      default: 0
    }
  }
}
</script>
