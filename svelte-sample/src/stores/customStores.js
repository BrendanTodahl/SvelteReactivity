import { writable } from 'svelte/store'

function createColor() {
  const { subscribe, set } = writable('Pick a color!')

  return {
    subscribe,
    setColor: (color) => set(color)
  }
}

export const color = createColor()
