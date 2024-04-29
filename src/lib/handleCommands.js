/**
 * @param {string} command
 * @param {string} flag
 */
export const handleCommands = (command, flag) => {
	switch (command) {
		case 'help':
			help(flag);
			break;
		case 'contact':
			contact(flag);
			break;
		case 'about':
			about(flag);
			break;
		case 'projects':
			projects(flag);
			break;
		case 'skills':
			skills(flag);
			break;
		case 'education':
			education(flag);
			break;
		case 'experience':
			experience(flag);
			break;
		case 'resume':
			resume(flag);
			break;
		case 'clear':
			clear();
			break;
	}
};

/**
 *@param {string} flag
 */
const help = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const contact = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const about = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const projects = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const skills = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const education = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const experience = (flag) => {
	console.log(flag);
};

/**
 *@param {string} flag
 */
const resume = (flag) => {
	console.log(flag);
};

const clear = () => {
	console.log('clear');
};
