
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




const questions = [
    {
        type: 'input',
        name: 'Name',
        message: "Please enter your first and last name.",
        default: "",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "Please enter your GitHub user name.",
        default: "",
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter your email address.",
        default: "",
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        default: "MyProject",
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a description of your project. (N/A will ',
        default: "N/A",
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How will your project be used? (N/A will be inserted of no usage is input.)',
        default: "N/A",
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What steps are required for installing your project. (If no installation is required, N/A will be placed.)',
        default: "N/A",

    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'List any contributions to the project using GitHub user names.',
        default: "",
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'What license does your project have?',
        choices: ["MIT","APACHE 2.0","GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "MPL 2.0", "Boost 1.0", "Unlicense"],
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please explain what tests were done.',
        default: "N/A",
    }
];

function write () {
    fs.writeFile('README.md', fileRM, (err) => err ? console.log(err) :  console.log("Generating README..."));
};


function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileRM = generateMarkdown(answers);
        write();
       
});
};
// Function call to initialize app
init();
