<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Hi Svelte!</a>
			</li>
			<li aria-current={$page.url.pathname === '/helloWorld' ? 'page' : undefined}>
				<a href="/helloWorld">Hello World</a>
			</li>
			<li aria-current={$page.url.pathname === '/todoList' ? 'page' : undefined}>
				<a href="/todoList">Todo List</a>
			</li>
			<li aria-current={$page.url.pathname === '/colorList1' ? 'page' : undefined}>
				<a href="/colorList1">Color List V1</a>
			</li>
			<li aria-current={$page.url.pathname === '/colorList2' ? 'page' : undefined}>
				<a href="/colorList2">Color List V2</a>
			</li>
			<li aria-current={$page.url.pathname === '/components' ? 'page' : undefined}>
				<a href="/components">Components</a>
			</li>
			<li aria-current={$page.url.pathname === '/dataStores' ? 'page' : undefined}>
				<a href="/dataStores">Data Stores</a>
			</li>
			<li aria-current={$page.url.pathname === '/customDataStores' ? 'page' : undefined}>
				<a href="/customDataStores">Custom Data Stores</a>
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
		--background: rgba(255, 255, 255, 0.7);
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
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--color-text);
		font-weight: 700;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
