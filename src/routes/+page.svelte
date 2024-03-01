<script>
	import Conky from './../components/conky.svelte';
	import Sidebar from './../components/sidebar.svelte';
	import Window from '../components/window.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.backgroundImage =
			'url("https://res.cloudinary.com/dwcquwmpw/image/upload/v1709224311/wp2673988-anime-dark-wallpaper_s0hwmx.webp")';
		document.body.style.backgroundSize = 'cover';
	});
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<Sidebar />
<Conky />
<div class="w-full h-full flex justify-center items-center p-4"><Window /></div>
