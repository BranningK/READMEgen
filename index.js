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
        message: 'What is the title of your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the decription of your project?'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Describe how to install your project. (if you do not need to install, type N/A)'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Input your usage information.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Input contribution guidelines.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Input your test instructions here.',
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
        choices: ['Apache','BSD','Creative Commons','GNU','MIT/X11/MIT-X','Other/None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Filename: ", fileName);
    console.log("Data: ", data);
    // we need to use the FS library to write it to the DISK 
    fs.writeFile(fileName, dta, function(error) {
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
        // deal with a successful response
        .then(function(answers) {
           // console.log("I am code INSIDE of the retruned promise")
            console.log(answers);


            // PASS the data gathered to generateMarkdown
            let result = generateMarkdown(answers);

            // pass the data to our WRITE FILE function
            writeToFile("README.md", result)
        })
        // deal with an ERROR response
        .catch(function(error) {
            console.log(error);
            throw error;
        });

   // console.log("I am code AFTER the prompt")
}



// Function call to initialize app
init();
