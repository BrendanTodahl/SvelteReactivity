<template>
  <div>
    <NuxtLink to="/">
      VueLogo
    </NuxtLink>
    <NuxtLink to="/HelloWorld">
      Hello World
    </NuxtLink>
    <NuxtLink to="/ColorList1">
      Color List v1
    </NuxtLink>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped>
  div {
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }

  a {
    margin-bottom: 10px;
    padding: 10px;
  }

  a:hover {
    text-decoration: none;
  }
</style>
