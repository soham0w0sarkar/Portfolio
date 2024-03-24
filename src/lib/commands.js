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
 * @param {string} command
 * @returns {void}
 */

const updateCommandLine = (command, output, status) => {
	commandLine.update((commandLine) => {
		commandLine[commandLine.length - 1] = {
			command,
			output,
			status
		};
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
	console.log('portfolio');
};

const about = () => {
	console.log('about');
};

const contact = () => {
	console.log('contact');
};

const skills = () => {
	console.log('skills');
};

const projects = () => {
	console.log('projects');
};

const education = () => {
	console.log('education');
};

const experience = () => {
	console.log('experience');
};

const resume = () => {
	console.log('resume');
};

const exit = () => {
	console.log('exit');
};
