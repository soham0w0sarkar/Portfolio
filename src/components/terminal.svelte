<script>
	import { Material } from '$lib';

	import handleCommand from '$lib/commands';
	import { commandHistory, commandLine } from '$lib/store';
	import { onMount, tick } from 'svelte';

	/**
	 * @type {number}
	 */

	let currentCommand = $commandHistory.length;

	/**
	 * @type {NodeListOf<HTMLInputElement>}
	 */

	let inputElements;

	const focus = () => {
		inputElements = document.querySelectorAll('.inputs');
		inputElements[inputElements.length - 1].focus();
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

	let terminal = Material;
</script>

<svelte:component this={terminal} />
