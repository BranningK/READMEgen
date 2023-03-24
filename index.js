// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');   // this bring is the FILE SYSTEM library to our current file
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the decription of your project?'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Describe how to install your project. (If you do not need to install, type N/A)'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Input your usage information.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Input your contribution guidelines.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Input your test instructions here. (If you do not have test instructions, type N/A)',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['Apache','BSD','CreativeCommons','GNU','MIT','Other/None']
    },
    {
        type: 'list',
        name: 'color',
        message: 'What is your favorite color?',
        choices: ['red', 'orange', 'yellow', 'green', 'blue', 'blueviolet']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Filename: ", fileName);
    console.log("Data: ", data);
    // we need to use the FS library to write it to the DISK 
    fs.writeFile(fileName, data, function(error) {
        if(error) {
            console.log("error: ", error);
            throw error;
        }
        console.log("Files Saved Successfully");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers);

            // PASS the data gathered to generateMarkdown
            let result = generateMarkdown(answers);

            // pass the data to our WRITE FILE function
            writeToFile("README.md", result)
        })
        .catch(function(error) {
            console.log(error);
        });
}



// Function call to initialize app
init();
