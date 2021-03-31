const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// const {message} = require('statuses');
// setting it to empty array to be able to retrieve the inputs
let answers = {};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    
}

inquirer.prompt(
[
    {
        type: 'input',
        message: 'What is the Project title?',
        //name is the 'key'
        name: 'title',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'What is the Description of this project?',
        name: 'description',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'What are the Table of Contents?',
        name: 'table of contents',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'installation',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'What is the purpose of this project?',
        name: 'usage',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        //MIT
        type: 'input',
        message: 'What Licenses were used?',
        name: 'license',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'List the contributors of this project.',
        name: 'contributing',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'How do you test this project?',
        name: 'test',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
    {
        type: 'input',
        message: 'List questions about this project.',
        name: 'questions',
        validate: (value)=> {if(value){return true} else {return "Enter the correct value to continue"}},
    },
]
//saving the answers from inquirer.prompt to the variable 'answers'
).then((response) => {
answers = response;
const markdown = generateMarkdown(answers);
writeToFile("README.md", markdown);
})


