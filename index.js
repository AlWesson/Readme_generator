const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a description of your project.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How will your project be used?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What steps are required for installing your project. (N/A if no installation is required.)',
    },
    {
        type: 'input',
        name: 'Contributers',
        message: 'List any contributers to the project using GitHub user names.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license does your project have?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync()
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
