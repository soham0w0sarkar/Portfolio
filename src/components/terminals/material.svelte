<script>
	import { IconPoint, IconCircleCheck, IconCircleX } from '@tabler/icons-svelte';
	import handleCommand from '$lib/commands';
	import { commandHistory, commandLine } from '$lib/store';
	import { onMount, tick } from 'svelte';

	/**
	 * @type {number}
	 */

	let currentCommand = $commandHistory.length;

	/**
	 * @typedef {Object} CommandLine
	 * @property {string} command
	 * @property {string} output
	 * @property {'current' | 'success' | 'error'} status
	 */

	/**
	 * @type {NodeListOf<HTMLInputElement>}
	 */

	let inputElements;

	/**
	 * @returns {void}
	 */
	const focus = () => {
		inputElements = document.querySelectorAll('.inputs');
		inputElements[inputElements.length - 1].focus();
	};

	const giveCurrentTime = () => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		return `${hours}:${minutes}`;
	};

	onMount(() => {
		focus();
		/**
		 * Adds an event listener for the 'keydown' event.
		 * If the key pressed is 'Enter', it calls the handleCommands function.
		 */

		document.addEventListener('keydown', async (e) => {
			if (e.key === 'Enter') {
				handleCommand($commandLine[$commandLine.length - 1].command);
				await tick();
				focus();
			}

			if (e.key === 'ArrowUp') {
				if (currentCommand > 0) {
					$commandLine[$commandLine.length - 1].command = $commandHistory[--currentCommand];
				}
			}

			if (e.key === 'ArrowDown') {
				if (currentCommand < $commandHistory.length - 1) {
					$commandLine[$commandLine.length - 1].command = $commandHistory[++currentCommand];
				}
			}

			if (e.ctrlKey && e.key === 'k') {
				$commandLine = [
					{
						command: '',
						output: '',
						status: 'current'
					}
				];
			}

			if (e.ctrlKey && e.key === '`') {
				focus();
			}
		});
	});
</script>

<div>
	{#each $commandLine as line, i}
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
			<span class="text-2xl text-blue-500">&nbsp;portfolio</span>
			<span class="text-green-500 text-2xl">&nbsp;{giveCurrentTime()}</span>
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
