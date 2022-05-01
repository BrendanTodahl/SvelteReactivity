import React, { useState } from 'react'

export default function App() {
  const [color, setColor] = useState('')

  function handleClick(color) {
    setColor(color)
  }

  return (
    <div className="App">
      <button onClick={() => handleClick('Red')}>Red</button>
      <button onClick={() => handleClick('Blue')}>Blue</button>
      <button onClick={() => handleClick('Green')}>Green</button>
      <span>Color is: <strong>{color}</strong></span>
    </div>
  )
}
