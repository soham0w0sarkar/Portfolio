import { writable } from 'svelte/store';

export const commandHistory = writable(['']);
export const commandLine = writable([
	{
		command: '',
		status: 'current'
	}
]);
