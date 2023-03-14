// function to generate a license badge for README
function licenseBadge (type) {
  if (type === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (type === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
}


// Exports:
module.exports = licenseBadge;