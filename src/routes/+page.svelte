<script>
	import Window from '../components/window.svelte';
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

<div class="w-full h-full flex justify-center items-center p-4"><Window/></div>
