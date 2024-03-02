<script>
	import { commandLine } from '$lib/store';
	import { onMount } from 'svelte';

	/**
	 * The input command from the user.
	 * @type {string}
	 */
	let command = 'Command';

	/**
	 * The output to display based on the command.
	 * @type {string}
	 */
	let output = 'Output';

	/**
	 * A mapping of commands to their outputs.
	 * @type {Object.<string, string>}
	 */
	const commandOutputSet = {
		clear: 'clear',
		portfolio: 'portfolio',
		about: 'about',
		contact: 'contact',
		skills: 'skills',
		projects: 'projects',
		education: 'education',
		experience: 'experience',
		resume: 'resume',
		exit: 'exit'
	};

	/**
	 * Handles the command entered by the user.
	 */
	const handleCommand = () => {
		if (command === 'clear') {
			output = '';
		} else {
			output = commandOutputSet[command] || 'Command not found';

			if (output !== 'Command not found') {
			}
		}
	};

	/**
	 * The current time.
	 * @type {Date}
	 */
	const currentTime = new Date();
	const hours = currentTime.getHours().toString().padStart(2, '0');
	const minutes = currentTime.getMinutes().toString().padStart(2, '0');
	const formattedTime = `${hours}:${minutes}`;

	onMount(() => {
		/**
		 * Adds an event listener for the 'keydown' event.
		 * If the key pressed is 'Enter', it calls the handleCommand function.
		 */
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				handleCommand();
			}
		});
	});
</script>

<div>
	{#each $commandLine as command, index}
		<div class="flex text-3xl font-bold items-center">
			<span class="text-violet-500">></span>
			<span class="text-green-500">></span>
			<span class="text-2xl text-blue-500">&nbsp;portfolio</span>
			<span class="text-green-500 text-2xl">&nbsp;{formattedTime}</span>
			<span class="flex items-center w-3/4"
				>&nbsp;<input
					type="text"
					class="bg-inherit p-0 w-full border-0 text-2xl border-transparent focus:border-transparent focus:ring-0"
					bind:value={command}
				/></span
			>
		</div>
		<div class="text-3xl w-full h-fit">
			{output}
		</div>
	{/each}
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
