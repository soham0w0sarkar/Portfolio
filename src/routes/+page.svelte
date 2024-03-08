<script>
	import { Window , Terminal} from '$lib';
	
	let userAgent = navigator.userAgent;
	console.log("User Agent:", userAgent);

	let deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent) ? "Mobile" : "Desktop";
	console.log("Device Type:", deviceType);
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center p-4">
	<Window>
		<Terminal />
	</Window>
</div>
