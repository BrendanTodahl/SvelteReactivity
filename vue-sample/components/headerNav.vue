<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            Hi Vue!
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/helloWorld">
            Hello World
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/todoList">
            Todo List
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/colorList1">
            Color List v1
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/colorList2">
            Color list v2
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/components">
            Components
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
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

  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li a.router-link-exact-active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
