import React, { useState } from 'react'

export default function App() {
  const [selectedColor, setColor] = useState('')

  function handleClick(color) {
    setColor(color)
  }

  const colors = ['Red', 'Blue', 'Green']
  const listItems = colors.map((color) =>
    <button onClick={() => handleClick(color)}>{color}</button>
  )

  return (
    <div className="App">
      {listItems}
      <span>Color is: <strong>{selectedColor}</strong></span>

      <br/>

      {!selectedColor && <span>Pick a color!</span>}
      {selectedColor === 'Red' && <span>That's my favorite color!</span>}
      {selectedColor && selectedColor !== 'Red' && <span>That's almost as cool as Red!</span>}
    </div>
  )
}
