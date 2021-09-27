//  Establish variables for the NODE modules
const inquirer = require('inquirer');
const fs = require('fs');
// const;

// TODO: Incorporate Inquirer with syntax to ask questions to generate README using array.
// type: 
// message: 
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

        // TODO: Prompt for question answer confirmation(Validate)

        // Format of syntax
    ]
)
// Template 

// TODO: Function to create README using "fs"

// TODO: Function for createFile

// TODO: Create function to initialize 

// TODO: Call Function for app initialization