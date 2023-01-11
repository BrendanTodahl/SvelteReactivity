import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState('World')
  const [count, setCount] = useState(0)

  function nameChange(event) {
    setName(event.target.value)
  }

  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <input type="text" value={name} onInput={nameChange} />
      <button onClick={incrementCount}>Clicks: {count}</button>
    </div>
  )
}
