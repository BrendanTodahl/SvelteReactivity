<script>
	import ChildComponent from './childComponent.svelte'
</script>

<p>This paragraph is purple!</p>
<ChildComponent number={100}/>

<style>
	p {
		color: purple;
		font-size: 2em;
	}
</style>
