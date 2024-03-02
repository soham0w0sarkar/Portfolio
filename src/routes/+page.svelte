<script>
	import Window from '../components/window.svelte';
	import Terminal from '../components/terminal.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center p-4">
	<Window>
		<Terminal />
	</Window>
</div>
