<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.backgroundImage =
			'url("https://res.cloudinary.com/dwcquwmpw/image/upload/v1708859020/anime_wallpaper_szq8rz.webp")';
		document.body.style.backgroundSize = 'cover';
	});
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
	<div
		class="flex justify-center items-center h-1/2 w-1/2 variant-glass-surface rounded-md overflow-hidden"
	>
		<div class="w-full h-10 fixed top-0 variant-glass-surface">
			<div class="flex justify-between items-center">
				<div class="flex justify-center items-center">
					<div class="w-4 h-4 bg-red-500 rounded-full"></div>
					<div class="w-4 h-4 bg-yellow-500 rounded-full ml-1"></div>
					<div class="w-4 h-4 bg-green-500 rounded-full ml-1"></div>
				</div>
			</div>
		</div>
	</div>
</div>
