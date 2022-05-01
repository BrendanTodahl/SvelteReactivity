<script>
	import { page } from '$app/stores'
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Hi Svelte!</a>
			</li>
			<li class:active={$page.url.pathname === '/helloWorld'}>
				<a sveltekit:prefetch href="/helloWorld">Hello World</a>
			</li>
			<li class:active={$page.url.pathname === '/colorList1'}>
				<a sveltekit:prefetch href="/colorList1">Color List V1</a>
			</li>
			<li class:active={$page.url.pathname === '/colorList2'}>
				<a sveltekit:prefetch href="/colorList2">Color List V2</a>
			</li>
			<li class:active={$page.url.pathname === '/todoList'}>
				<a sveltekit:prefetch href="/todoList">Todo List</a>
			</li>
			<li class:active={$page.url.pathname === '/components'}>
				<a sveltekit:prefetch href="/components">Components</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid lightgray;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
