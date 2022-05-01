import React, { useState } from 'react'

export default function App() {
  const [color, setColor] = useState('')

  function handleClick(color) {
    setColor(color)
  }

  function ColorList(props) {
    const colors = props.colors || []
    const listItems = colors.map((color) =>
      <button onClick={() => handleClick(color)}>{color}</button>
    )

    return (
      <span>{listItems}</span>
    )
  }

  const colors = ['Red', 'Blue', 'Green']

  return (
    <div className="App">
      <ColorList colors={colors} />
      <span>Color is: <strong>{color}</strong></span>

      <br/>

      {!color && <span>Pick a color!</span>}
      {color === 'Red' && <span>That's my favorite color!</span>}
      {color && color !== 'Red' && <span>That's almost as cool as Red!</span>}
    </div>
  )
}
