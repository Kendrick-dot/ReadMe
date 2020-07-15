const fs = require("fs");

const inquirer = require("inquirer");

const path = require("path");


// the array of inquiries
const questions = [

    {
        type: "input",
        message: "Enter username for Github",
        name: "github",
    },
    {
        type: "input",
        message: "Enter title of project",
        name: "title",
    },
    {
        type: "input",
        message: "Describe the project",
        name: "description",
    },
    {
        type: "input",
        message: "List all installations and dependencies",
        name: "installs",
    },
    {
        type: "input",
        message: "Enter instructions on how to use project",
        name: "instructions",
    },
    {
        type: "input",
        message: "List the contributors of project",
        name: "contributors",
    }
]
console.clear();
inquirer
    .prompt(questions).then(response => {

        fs.appendFileSync("README.md", ("#" + response.github) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
        fs.appendFileSync("README.md", ("#" + response.title) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
        fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
        fs.appendFileSync("README.md", ("## Installation" + response.installs) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
        fs.appendFileSync("README.md", ("## Instructions" + response.instructions) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
        fs.appendFileSync("README.md", ("## Contributors" + response.contributors) + '\n', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success");
        });
    });

