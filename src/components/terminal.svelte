<script>
	import { Material, AtomicBit } from '$lib';

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

	/**
	 * @param {string} terminalName
	 */
	const changeTerminal = (terminalName) => {
		if (terminalName === "material") {
			terminal = Material;
		} else if (terminalName === "atomicBit") {
			terminal = AtomicBit;
		}
	};

	onMount(() => {
		focus();
		/**
		 * Adds an event listener for the 'keydown' event.
		 * If the key pressed is 'Enter', it calls the handleCommands function.
		 */
		document.addEventListener('keydown', async (e) => {
			if (e.key === 'Enter') {
				if($commandLine[$commandLine.length - 1].command === "") return;
				
				if($commandLine[$commandLine.length - 1].command.split(' ')[0] === "oh-my-posh") {
					changeTerminal($commandLine[$commandLine.length - 1].command.split(' ')[1]);
				} else {
					handleCommand($commandLine[$commandLine.length - 1].command);
				}
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
