<template>
  <div>
    <label>
      <input type="checkbox" v-model="hideDone">
      Hide Done
    </label>

    <span> - Showing {{ showing }} of {{ todos.length }}</span>

    <ul>
      <li v-for="todo in filtered" :key="todo.text" @click="toggleDone(todo)">
        {{ todo.done ? 'X' : '' }} {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    filtered () {
      return this.hideDone
        ? this.todos.filter(todo => !todo.done)
        : this.todos
    },
    showing () {
      return this.filtered.length
    }
  },
  methods: {
    toggleDone (t) {
      this.todos = this.todos.map((todo) => {
        if (todo === t) {
          return { done: !t.done, text: t.text }
        }
        return todo
      })
    }
  },
  data () {
    return {
      todos: [
        { done: false, text: 'Eat' },
        { done: false, text: 'Sleep' },
        { done: false, text: 'Learn Svelte' },
        { done: false, text: 'Repeat' }
      ],
      hideDone: false
    }
  }
}
</script>
