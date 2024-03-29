// Require:
const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const markdownGenerate = require("./assets/js/markdownGenerate");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "README.md");


// Inquirer Questions:
const questions = [
  {
    type: "input",
    name: "email",
    message: `What is your email address?
`,
  },
  {
    type: "input",
    name: "github",
    message: `What is your GitHub username?
`
  },
  {
    type: "input",
    name: "title",
    message: `What is the title of your project?
`
  },
  {
    type: "input",
    name: "repository",
    message: `What is the repository name of your project?"
`
  },
  {
    type: "input",
    name: "description",
    message: `What is the description of your project?"
`
  },
  {
    type: "input",
    name: "installation",
    message: `How can a user install your project?"
`
  },
  {
    type: "input",
    name: "usage",
    message: `How can a user use your project?"
`
  },
  {
    type: "input",
    name: "contributing",
    message: `How can a user contribute your project?"
`
  },
  {
    type: "input",
    name: "tests",
    message: `How can a user test your project?"
`
  },
  {
    type: "list",
    name: "license",
    message: `Please select a license for your project:`,
    choices: ["MIT", "ISC"],
  },
];


// # Named Functions:
// ## Function to generate the README:
function readItForMe() {
  console.log(
`=============================================================================================

██████╗░███████╗░█████╗░██████╗░  ██╗████████╗  ███████╗░█████╗░██████╗░  ███╗░░░███╗███████╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗  ██║╚══██╔══╝  ██╔════╝██╔══██╗██╔══██╗  ████╗░████║██╔════╝
██████╔╝█████╗░░███████║██║░░██║  ██║░░░██║░░░  █████╗░░██║░░██║██████╔╝  ██╔████╔██║█████╗░░
██╔══██╗██╔══╝░░██╔══██║██║░░██║  ██║░░░██║░░░  ██╔══╝░░██║░░██║██╔══██╗  ██║╚██╔╝██║██╔══╝░░
██║░░██║███████╗██║░░██║██████╔╝  ██║░░░██║░░░  ██║░░░░░╚█████╔╝██║░░██║  ██║░╚═╝░██║███████╗
╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░  ╚═╝░░░╚═╝░░░  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝  ╚═╝░░░░░╚═╝╚══════╝
                                    the README generator
=============================================================================================
    
Please start by entering your details:`)
  inquirer.prompt(questions).then(function (answer) {
    writeToFile(outputPath, markdownGenerate(answer));
  });
}


// function to write README file
function writeToFile(path, content) {
  fs.writeFileSync(path, content);
  console.log(`
=============================================================================================
         Task complete! Your new README file can be found at "./output/team.html"
=============================================================================================`)
    process.exit(0);
};


// # Initialise the App:
readItForMe();
