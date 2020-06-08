const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
inquirer.prompt([
    {
       type:'input',
       name: 'first',
       message: 'What is your project called ?' 
    },
    {
        type:'input',
        name: 'second',
        message: 'Please give a brief Description!' 
     }
  ])
  .then(function(answers)  {
      console.log('This is frist answer!!!', answers); 
      var readMeString = `
# Title ${answers.first}
# Description ${answers.second}
        asdfasd
      `
      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })