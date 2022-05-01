import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('World')

  function incrementCount() {
    setCount(count + 1)
  }

  function nameChange(event) {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <input type="text" value={name} onInput={nameChange} />
      <button onClick={incrementCount}>Clicks: {count}</button>
    </div>
  );
}
