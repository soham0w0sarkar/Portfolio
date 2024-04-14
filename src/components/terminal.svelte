<script>
	/**
	 * Importing Material and AtomicBit components along with Svelte utilities and stores.
	 * @type {import('svelte').SvelteComponent}
	 */
	import { Material, AtomicBit } from '$lib';
	import { commandHistory, commandLine } from '$lib/store';
	import { SvelteComponent, onMount, tick } from 'svelte';

	/**
	 * Stores a reference to all input elements with the class 'inputs'.
	 * @type {NodeListOf<HTMLInputElement>}
	 */
	let inputElements;

	/**
	 * Sets focus on the last input element with the class 'inputs'.
	 */
	const focus = () => {
		inputElements = document.querySelectorAll('.inputs');
		inputElements[inputElements.length - 1]?.focus();
	};

	// /**
	//  * Current terminal component to render.
	//  * @type {typeof SvelteComponent}
	//  */
	let terminal = Material;

	/**
	 * Index of the current command in the command history.
	 * @type {number}
	 */
	let currentCommand = $commandHistory.length;

	/**
	 * Changes the current terminal component based on the provided terminal name.
	 * @param {string} terminalName - Name of the terminal component to switch to.
	 */
	// const changeTerminal = (terminalName) => {
	// 	switch (terminalName) {
	// 		case 'atomic-bit':
	// 			terminal = AtomicBit;
	// 			break;
	// 		case 'material':
	// 			terminal = Material;
	// 			break;
	// 		default:
	// 			// Handle unexpected terminalName
	// 			break;
	// 	}
	// };

	/**
	 * Handles keyboard events to interact with the command line interface.
	 * @param {KeyboardEvent} e - The keyboard event object.
	 */
	const handleKeyDown = async (e) => {
		if (e.key === 'Enter') {
			currentCommand = $commandHistory.length;
			if ($commandLine[$commandLine.length - 1].command === '') return;

			await tick();
			focus();
		}

		if (e.key === 'ArrowUp') {
			if (currentCommand < $commandHistory.length - 1) {
				$commandLine[$commandLine.length - 1].command = $commandHistory[++currentCommand];
			}
		}

		if (e.key === 'ArrowDown') {
			if (currentCommand >= 0) {
				$commandLine[$commandLine.length - 1].command = $commandHistory[--currentCommand];
			}
		}

		if (e.ctrlKey && e.key === '`') {
			focus();
		}
	};

	/**
	 * Lifecycle hook that runs after the component mounts.
	 */
	onMount(() => {
		focus();
		document.addEventListener('keydown', handleKeyDown);

		/**
		 * Cleanup function to remove the event listener when the component unmounts.
		 */
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<svelte:component this={terminal} />
