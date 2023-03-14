// Require:
const licenseBadge = require("./licenseBadge");
const licenseText = require("./licenseText");


// Variables:
var currentTime = new Date();
const year = currentTime.getFullYear();


function markdownGenerate(answer) {
  let licBadge = licenseBadge (answer.license);
  let licText = licenseText (answer.license);
  
  return `# ${answer.title}
${licBadge}

## Description
${answer.description}

</br>

___
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

</br>

___
## Installation
${answer.installation}

## Usage
${answer.usage}

## License
${answer.license}

Copyright (c) ${year} ${answer.github}

${licText}

## Contributing
${answer.contributing}

## Tests
${answer.tests}

## Questions
For any questions regarding this application please contact via:
* Email: ${answer.email}
* GitHub: ${answer.github}`
}


// Exports:
module.exports = markdownGenerate