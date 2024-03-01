<script>
	import { onMount } from 'svelte';

    const date = new Date();
    const day = `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
</script>

<div class="flex text-3xl font-bold">
    <span class="text-violet-500">></span>
    <span class="text-green-500">></span>
    <span class="text-2xl text-blue-500">&nbsp;portfolio</span>
    <span class="text-green-500 text-2xl">&nbsp;{day}</span>
</div>

<style>
	@font-face {
		font-family: nerd-font;
		src: url('../assests/font/nerd-font.ttf');
	}
    div {
        font-family: nerd-font;
    }
</style>