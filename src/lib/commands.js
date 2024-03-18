/**
* @param {string} command
* @returns {void}
*/
const handleCommand = (command) => {
    switch (command) {
        case 'clear':
            console.log('clear');
            break;
        case 'portfolio':
            console.log('portfolio');
            break;
        case 'about':
            console.log('about');
            break;
        case 'contact':
            console.log('contact');
            break;
        case 'skills':
            console.log('skills');
            break;
        case 'projects':
            console.log('projects');
            break;
        case 'education':
            console.log('education');
            break;
        case 'experience':
            console.log('experience');
            break;
        case 'resume':
            console.log('resume');
            break;
        case 'exit':
            console.log('exit');
            break;
        default:
            console.log('default');
            break;
    }
};

export default handleCommand;