// TODO: Include packages needed for this application
const fs = require("fs").promises;
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
const licenses = [];
class Question{
    constructor(message, name){
        this.message = message;
        this.name = name;
        
    }
}

class Input extends Question{
    constructor(message, name){
        super(message, name);
        questions.push({
            type: "input",
            message: this.message,
            name: this.name
        })
    }
}

class List extends Question{
    constructor(message, name, choices){
        super(message, name);
        this.choices = choices;
        questions.push({
            type: "list",
            message: this.message,
            name: this.name,
            choices: this.choices
        })
    }
}

class License{
    static instances = [];
    constructor(label, badge, link){
        this.label = label;
        this.badge = badge;
        this.link = link;
        License.instances.push(this);
        licenses.push(this.label);
    };
};

const mit = new License("MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "https://choosealicense.com/licenses/mit/");
const isc = new License("ISC", "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", "https://choosealicense.com/licenses/isc/");
const gnu2 = new License("GNU GPLv2", "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)", "https://choosealicense.com/licenses/gpl-2.0/");
const gnu3 = new License("GNU GPLv3", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "https://choosealicense.com/licenses/gpl-3.0/");
const apache = new License("Apache 2.0", "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "https://choosealicense.com/licenses/apache-2.0/");
licenses.push("None");


const title = new Input("What is the title of your project?", "title");
const description = new Input("How would you describe your application?", "description");
const installation = new Input("How do you install your application?", "installation");
const usage = new Input("How does one use your application?", "usage");
const license = new List("Choose a license for your application's use:", "license", licenses);
const contributing = new Input("What are the contribution guidelines for your project?", "contributing");
const tests = new Input("What tests can I run on this application to ensure it is working properly?", "tests");
const github = new Input("What is the link to your github profile?", "github");
const email = new Input("What is your email address?", "email");

async function questioner(){
    const result = await inquirer.prompt(
        questions
    ).then((data)=>data)
    return result;
}

// TODO: Create a function to write README file
function writeToFile(data) {
    // console.log(data)
    // const readmeText = generateMarkdown(data);
    fs.writeFile("README.md", generateMarkdown(data, License.instances)).then((err) =>
    err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
async function init() {
    const result = await questioner();
    writeToFile(result);
}

// Function call to initialize app
init();
