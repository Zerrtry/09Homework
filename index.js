const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

inquirer.prompt([
  {
    type:'input',
    name: 'Titile',
    message: 'What is the Project title?',
 },
  {
    type:'input',
    name: 'Discription',
    message: 'Description',
 },
 {
     type:'input',
     name: 'Installation',
     message: 'Installation process',
  },
  {
    type:'input',
    name: 'Usage',
    message: 'Usage',
  },
  {
    type:'list',
    name: 'Badges',
    message: 'License',
    choices: ['MIT', 'Creative Commons'],
  },
  {
    type:'input',
    name: 'Contributing',
    message: 'Contributing',
  },
  {
    type:'input',
    name: 'Tests',
    message: 'Tests',
  }
])
.then(function(answers)  {
  console.log('This is the answers!!!', answers);
  generateMarkdown(answers)
  
});

