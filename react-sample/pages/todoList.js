import React, { useState, useMemo } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { done: false, text: 'Eat' },
    { done: false, text: 'Sleep' },
    { done: false, text: 'Learn Svelte' },
    { done: false, text: 'Repeat' }
  ])

  function toggleDone(t) {
    setTodos(todos.map(todo => {
      if (todo === t) return { done: !t.done, text: t.text }
      return todo
    }))
  }

  const [hideDone, setHideDone] = useState(false)

  function toggleHideDone() {
    setHideDone(!hideDone)
  }

  const filtered = useMemo(
    () => hideDone
      ? todos.filter(todo => !todo.done)
      : todos,
    [todos, hideDone]
  )

  return (
    <div>
      <label>
        <input type="checkbox" class="me-1" checked={hideDone} onChange={toggleHideDone} />
        Hide Done - Showing {filtered.length} of {todos.length}
      </label>

      <ul>
        {filtered.map(todo => (
          <li onClick={() => toggleDone(todo)}>
            {todo.done ? 'X' : ''} {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
