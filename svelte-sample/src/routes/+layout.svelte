<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<Header />

<div class="container">
	<div class="card">
		<div class="card-body">
			<div>
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 50%;
	}

	.card {
		height: -webkit-fill-available;
		box-shadow: 7px 4px 10px grey;
		align-items: center;
	}

	.card-body {
		display: flex;
		align-items: center;
	}
</style>
