import { writable } from 'svelte/store';

export const commandLine = writable([
	{
		id: 0,
		command: '',
		response: '',
		status: 'success'
	}
]);
