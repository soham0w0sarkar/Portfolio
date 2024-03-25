import { commandHistory, commandLine } from '$lib/store';

/**
 * @param {string} command
 * @returns {void}
 */

export default function handleCommand(command) {
	switch (command) {
		case 'clear':
			clear();
			break;
		case 'portfolio':
			portfolio();
			break;
		case 'about':
			about();
			break;
		case 'contact':
			contact();
			break;
		case 'skills':
			skills();
			break;
		case 'projects':
			projects();
			break;
		case 'education':
			education();
			break;
		case 'experience':
			experience();
			break;
		case 'resume':
			resume();
			break;
		case 'exit':
			exit();
			break;
	}
	addCommandToHistory(command);
}

/**
 * @param {string} output
 * @param {string} status
 * @returns {void}
 */

const updateCommandLine = (output, status) => {
	commandLine.update((commandLine) => {
		commandLine[commandLine.length - 1].output = output;
		commandLine[commandLine.length - 1].status = status;
		return commandLine;
	});

	const newCommandLine = {
		command: '',
		output: '',
		status: 'current'
	};

	commandLine.update((commandLine) => {
		commandLine.push(newCommandLine);
		return commandLine;
	});
};

/**
 * @param {string} command
 * @returns {void}
 */

const addCommandToHistory = (command) => {
	commandHistory.update((commandHistory) => {
		commandHistory.push(command);
		return commandHistory;
	});
};

const clear = () => {
	const newCommandLine = [
		{
			command: '',
			output: '',
			status: 'current'
		}
	];
	commandLine.set(newCommandLine);
};

const portfolio = () => {
	updateCommandLine('portfolio', 'success');
};

const about = () => {
	updateCommandLine('about', 'success');
};

const contact = () => {
	updateCommandLine('contact', 'success');
};

const skills = () => {
	updateCommandLine('skills', 'success');
};

const projects = () => {
	updateCommandLine('projects', 'success');
};

const education = () => {
	updateCommandLine('education', 'success');
};

const experience = () => {
	updateCommandLine('experience', 'success');
};

const resume = () => {
	updateCommandLine('resume', 'success');
};

const exit = () => {
	updateCommandLine('exit', 'success');
};
