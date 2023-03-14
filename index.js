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