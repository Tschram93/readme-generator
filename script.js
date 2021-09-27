//  Establish variables for the NODE modules
const inquirer = require('inquirer');
const fs = require('fs');
// const;

// TODO: Incorporate Inquirer with syntax to ask questions to generate README using array.

// Format of syntax
// type: 
// message: 
// choices: (if any.. else leave out)
// default: (if any.. else leave out)
// name: 

inquirer.prompt(
    [{
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "Give a description of your project.",
            name: 'description',
        },
        {
            type: 'input',
            message: "What is the link to the page or demo?",
            name: 'link',
        },
        {
            type: 'list',
            message: "What license does your project use?",
            name: 'license',
            choices: [
                'MIT',
                'Apache 2.0',
                'BSD 3',
                'GPL 3.0',
                'none'
            ]
        },
        {
            type: 'input',
            message: 'Explain with instructions on how to use this application.',
            name: 'instructions',
        },
        {
            type: 'default',
            message: 'What is the command to install the required dependencies?',
            default: 'npm i',
            name: 'dependencies',
        },
        {
            type: 'input',
            message: 'What needs to be done in order to run tests?',
            default: 'npm test',
            name: 'tests',
        },
        // TODO: Prompt for question answer confirmation(Validate)

    ]
)
// Template 

// TODO: Function to create README using "fs"

// TODO: Function for createFile

// TODO: Create function to initialize 

// TODO: Call Function for app initialization