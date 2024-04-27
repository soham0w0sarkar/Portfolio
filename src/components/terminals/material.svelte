<script>
	import { IconPoint, IconCircleCheck, IconCircleX } from '@tabler/icons-svelte';
	import { commandLine } from '$lib/store';
	import { Skills, Contact } from '$lib';

	const giveCurrentTime = () => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		if (minutes < 10) {
			return `${hours}:0${minutes}`;
		}
		return `${hours}:${minutes}`;
	};
</script>

<div>
	{#each $commandLine as line}
		<div class="flex text-3xl font-bold items-center">
			<span>
				{#if line.status === 'current'}
					<IconPoint size={20} stroke={2} />
				{:else if line.status === 'success'}
					<IconCircleCheck size={15} stroke={3} color={'green'} />
				{:else}
					<IconCircleX size={15} stroke={2} color={'red'} />
				{/if}
			</span>
			<span class="text-violet-500">></span>
			<span class="text-green-500">></span>
			<span class="text-fuchsia-500">&nbsp;runner&nbsp;on</span>
			<span class="text-blue-500">&nbsp;portfolio</span>
			<span class="text-green-500">&nbsp;{giveCurrentTime()}</span>
			<span class="flex items-center w-3/4">
				&nbsp;
				<input
					type="text"
					class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
					bind:value={line.command}
					readonly={line.status !== 'current' ? true : false}
				/>
			</span>
		</div>
		<div class="text-3xl w-full h-fit">
			<Contact />
		</div>
	{/each}
</div>

<style>
	@font-face {
		font-family: nerd-font;
		src: url('../../assests/font/nerd-font.ttf');
	}
	div {
		font-family: nerd-font;
	}
</style>
