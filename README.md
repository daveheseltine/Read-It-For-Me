# Read-It-For-Me (Trilogy Skills Bootcamp: Week 11)

## Table of Contents
Design Prompt:
* [Description](#Description)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Mock-up](#Mock-up)

Deployment:
* [URL](#URL)
* [License](#license)

Installation and Use:
* [Install Git and clone the repository](#Install-Git-and-clone-the-repository)
* [Install Visual Studio Code](#Install-Visual-Studio-Code)
* [Install Node.js and dependencies](#Install-Node.js-and-dependencies)
* [Terminal Commands](#Terminal-Commands)

</br>

___
# Design Prompt
## Description
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

My task was to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

The application will be invoked by using the following command:

```bash
node index.js
```

User Story:
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
<a href="#references">*[1]*</a>

</br>

## Acceptance Criteria
Your project must fulfil the following requirements<a href="#references">*[1]*</a>:
* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

</br>

___
# Deployment
## URL
* The URL of the deployed application: https://daveheseltine.github.io/read-it-for-me/
* The URL of the GitHub Repository: https://github.com/daveheseltine/read-it-for-me

</br>

## License
MIT License

Copyright (c) 2023 daveheseltine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</br>

___
# Installation and Use
## Install Git and clone the repository
* In your browser open https://git-scm.com/ and download the intaller.
* Run the `.exe` file and follow the instructions in the installer.
* In file-explorer navigate to your desired directory and run Git Bash by right-clicking and selecting the Git Bash Here option from the context menu.
* Type into Git Bash `git clone git@github.com:daveheseltine/teammates.git` and press enter.

## Install Visual Studio Code
* In your browser open https://code.visualstudio.com/ and download the intaller.
* Run the `.exe` file and follow the instructions in the installer.

## Install Node.js and dependencies
* In your browser open https://nodejs.org/en/ and download the intaller.
* Run the `.msi` file and follow the instructions in the installer.
* Open the cloned repository with Visual Studio Code.
* Open the Integrated Terminal by right-clicking in the explorer area and select the Open in Integrated Terminal option from the context menu.
* Type into the Integrated Terminal `npm i` to install the module dependencies, which will be installed at `./node_modules`.
* (Optional) Install the testing software Jest by typing into the Integrated Terminal `npm install --save-dev jest`

# Terminal Commands
  * `npm start` (*Node.js*) - Run the application, and answer the questions to create an HTML file. This will be created at `./output/README.html`.
  * `npm test` (*Jest*) - Test the application for errors using Jest.

</br>

___
# References
1. Trilogy Skills Bootcamp (2023) *UK-VIRT-FE-PT-12-2022-U-LOLC/11-es6-module/04-readme-generator-lesson/challenge/README.md*
