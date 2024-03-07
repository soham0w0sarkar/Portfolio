<script>
    import { IconPoint, IconCircleCheck, IconCircleX } from '@tabler/icons-svelte';
    import { onMount, tick } from 'svelte';

    /**
     * @type {string[]}
     */
    let commandHistory = [];
    /**
     * @type {number}
     */
    let currentCommand = commandHistory.length;

    /**
     * @typedef {Object} CommandLine
     * @property {string} command
     * @property {string} output
     * @property {'current' | 'success' | 'error'} status
     */

    /**
     * @type {CommandLine[]}
     */
    let commandLine = [
        {
            command: '',
            output: '',
            status: 'current'
        }
    ];

    /**
     * @type {NodeListOf<HTMLInputElement>}
     */
    let inputElements;

    /**
     * @type {Record<string, string>}
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
     * @returns {void}
     */
    const focus = () => {
        inputElements = document.querySelectorAll('.inputs');
        inputElements[inputElements.length - 1].focus();
    }

    /**
     * @param {string} command
     * @returns {void}
     */
	const handleCommand = (command) => {
		if (command === 'clear') {
			commandLine = [
				{
					command: '',
					output: '',
					status: 'current'
				}
			];
		} else {
			commandLine[commandLine.length - 1].output = commandOutputSet[command] || `command not found: ${command}`;
			commandLine[commandLine.length - 1].status = commandOutputSet[command] ? 'success' : 'error';
			commandLine = [
				...commandLine,
				{
					command: '',
					output: '',
					status: 'current'
				}
			];
		}
		commandHistory = [...commandHistory, command];
	};

	/**
	 * @type {Date}
	 */
	const currentTime = new Date();
	const hours = currentTime.getHours().toString().padStart(2, '0');
	const minutes = currentTime.getMinutes().toString().padStart(2, '0');
	const formattedTime = `${hours}:${minutes}`;


	onMount(() => {
		focus();
		/**
		 * Adds an event listener for the 'keydown' event.
		 * If the key pressed is 'Enter', it calls the handleCommand function.
		 */

		document.addEventListener('keydown', async(e) => {
			if (e.key === 'Enter') {
				handleCommand(commandLine[commandLine.length - 1].command);
				await tick();
				focus();
			}
			
			if (e.key === 'ArrowUp') {
				if (currentCommand > 0) {
					commandLine[commandLine.length - 1].command = commandHistory[--currentCommand];
				}
			}

			if (e.key === 'ArrowDown') {
				if (currentCommand < commandHistory.length - 1) {
					commandLine[commandLine.length - 1].command = commandHistory[++currentCommand];
				}
			}
		});

	});
</script>

<div>
	{#each commandLine as line, i}
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
			<span class="text-green-500 text-2xl">&nbsp;{formattedTime}</span>
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
		src: url('../assests/font/nerd-font.ttf');
	}
	div {
		font-family: nerd-font;
	}
</style>
