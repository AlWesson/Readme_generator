
// Allows for reading and creating files.
const fs = require('fs');
// Promise-based npm package for Node.js. Used for 'const questions' in this file.
const inquirer = require('inquirer');
// gets the file path to generateMarkdown, and loads it. 
const generateMarkdown = require('./utils/generateMarkdown');



// There are questions that'll be asked of the user to fill out the generated README.md. 
// Areas left empty will be filled with an 'N/A' in the file.
const questions = [
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
        message: 'Give a description of your project. (N/A will be inserted if no description is input.)',
        default: "N/A",
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How will your project be used? (N/A will be inserted if no usage is input.)',
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
        default: "N/A",
    },
    {
        type: 'list',
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
// writes the new file into the 'generated_file' folder.
function write (fileRM) {
    fs.writeFile('./generated_file/README.md', fileRM, (err) => err ? console.log(err) :  console.log("Generating README..."));
};

// prompts the array of questions and gets the answers. Then uses the answers for generateMarkdown.js file and sends to write() function above. 
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileRM = generateMarkdown(answers);
        write(fileRM);
       
});


};
// Function call to initialize app
init();
