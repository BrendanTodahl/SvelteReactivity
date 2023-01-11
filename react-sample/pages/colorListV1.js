import React, { useState } from 'react'

export default function App() {
  const [selectedColor, setColor] = useState('')

  function handleClick(color) {
    setColor(color)
  }

  return (
    <div className="App">
      <button onClick={() => handleClick('Red')}>Red</button>
      <button onClick={() => handleClick('Blue')}>Blue</button>
      <button onClick={() => handleClick('Green')}>Green</button>
      <span>Color is: <strong>{selectedColor}</strong></span>
    </div>
  )
}
