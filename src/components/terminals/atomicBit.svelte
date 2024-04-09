<script>
	import {
		IconUserCircle,
		IconFolderFilled,
		IconHash,
		IconX,
		IconChecks
	} from '@tabler/icons-svelte';
	import { commandLine } from '$lib/store';
</script>

<div>
	{#each $commandLine as line}
		<div class="flex w-full text-3xl font-semibold flex-col p-2">
			<div class="flex justify-start items-center gap-3">
				<IconUserCircle size={28} class="text-green-500" />
				<span class="text-green-500">runner on</span>
				<IconFolderFilled class="text-blue-500" size={28} />
				<span class="text-blue-500">~/portfolio</span>
			</div>
			<span class="flex items-center justify-center transition-all">
				{#if line.status === 'current'}
					<IconHash size={20} class="text-pink-700" stroke={3} />
				{:else if line.status === 'success'}
					<IconChecks size={20} class="text-green-500" stroke={3} />
				{:else}
					<IconX size={20} class="text-red-500" stroke={3} />
				{/if}
				&nbsp;
				<input
					type="text"
					class="inputs bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
					bind:value={line.command}
					readonly={line.status !== 'current' ? true : false}
				/>
			</span>
		</div>
		<div class="text-3xl w-full h-fit pr-2 pl-2">
			{line.output}
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
