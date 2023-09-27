// TODO: Include packages needed for this application
const fs = require("fs").promises;
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
class Question{
    constructor(message, name){
        this.message = message;
        this.name = name;
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

const title = new Question("What is the title of your project?", "title");
const description = new Question("How would you describe your application?", "description");
const installation = new Question("How do you install your application?", "installation");
const usage = new Question("How does one use your application?", "usage");
const license = new List("Choose a license for your application's use:", "license", ["ph1", "ph2", "ph3"]);
const contributing = new Question("What are the contribution guidelines for your project?", "contributing");
const tests = new Question("What tests can I run on this application to ensure it is working properly?", "tests");
const github = new Question("What is the link to your github profile?", "github");
const email = new Question("What is your email address?", "email");

async function questioner(){
    inquirer.prompt(
        questions
    ).then((data)=>console.log(data))
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questioner()
}

// Function call to initialize app
init();
