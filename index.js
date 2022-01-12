const fs = require('fs')
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    /* Pass your questions in here */
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "add description please:"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Please select license:",
        choices: [
            'MIT',
            'Mozilla',
            'Apache'
        ]
    },
    {
        type: "input",
        name: "projectEmail",
        message: "Please add email address:"
    },
    {
        type: "input",
        name: "projectGithub",
        message: "Please enter your Github:"
    },
    {
        type: "input",
        name: "projectInstall",
        message: "Please provide step by step installation requirements to install your project: "
    },
    {
        type: "input",
        name: "projectContribute",
        message: "If you created an application or package and would like other developers to contribute it, add guidelines for how to do so here:"
    },
    {
        type: "input",
        name: "projectCredit1",
        message: "List your collaborators, if any, with links to their GitHub profiles:"
    },
    {
        type: "input",
        name: "projectCredit2",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:"
    },
    {
        type: "input",
        name: "projectCredit3",
        message: "If you followed tutorials, include links to those here:"
    },
    {
        type: "input",
        name: "projectTest",
        message: "How do you test your application?:"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "what is your application used for? Provide instructions and examples for use:"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function () {
        console.log('readme successfully created')
    }
    )
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
            const generatedString = generateMarkdown(answers)
            console.log(generatedString)
           writeToFile('readme.md', generatedString)
        })
}

// Function call to initialize app
init();
