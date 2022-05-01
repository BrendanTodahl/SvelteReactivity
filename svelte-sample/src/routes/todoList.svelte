<script>
  let todos = [
		{ done: false, text: 'Eat' },
    { done: false, text: 'Sleep' },
    { done: false, text: 'Learn Svelte' },
    { done: false, text: 'Repeat' }
	]
	
	function toggleDone(t) {
		todos = todos.map(todo => {
			if (todo === t) return { done: !t.done, text: t.text }
			return todo
		})
	}
	
	let hideDone = false
	
	$: showing = filtered.length
	
	$: filtered = hideDone
		? todos.filter(todo => !todo.done)
		: todos
</script>

<label>
	<input type="checkbox" bind:checked={hideDone}>
	Hide Done
</label>

<span>Showing {showing} of {todos.length}</span>

<ul>
	{#each filtered as todo}
		<li on:click={() => toggleDone(todo)}>
			{todo.done ? 'X' : ''} {todo.text}
		</li>
	{/each}
</ul>