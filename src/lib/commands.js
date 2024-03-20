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
};

const clear = () => {
    console.log('clear');
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
