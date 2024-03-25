import { writable } from 'svelte/store';

export const commandHistory = writable(['']);
export const commandLine = writable([
	{
		command: '',
		output: '',
		status: 'current'
	}
]);
