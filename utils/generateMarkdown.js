const fs = require('fs');

const generateMarkdown = (answers) => {
  console.log('generator was called')
    let badgeUrl = ''
    if(answers.Badges === 'MIT') {
      badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else  if (answers.Badges === 'Creative Commons') {
      badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    }
    let readMeString = `
    # Title ${answers.Titile}
    # Description ${answers.Discription}
    # Installation process ${answers.Installation}
    # Usage ${answers.Usage}
    ${badgeUrl}
    # Contributing ${answers.Contributing}
    # Tests ${answers.Tests}
    `
    fs.writeFile('readMe.md',readMeString, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }

module.exports = generateMarkdown;