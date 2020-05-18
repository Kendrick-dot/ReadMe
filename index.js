const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
async function main() {
    console.log(`starting`);
    const userResponse = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub user name?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your Project Title?",
                name: "projectTitle"
            },
            {
                type: "input",
                message: "Provide description",
                name: "projectDescription"
            },
            {
                type: "input",
                message: "Table of Contents",
                name: "Contents"

            },
            {
                type: "input",
                message: "provide License name ",
                name: "licenseName"
            },
            {
                type: "input",
                message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
                name: "contributorsGitUserName"
            },
            {
                type: "input",
                message: "Provide examples on how to run tests.",
                name: "tests"
            }
        ]);

    console.log(`starting`);
    console.log(userResponse);
    const gitUsername = userResponse.username;
    const projectTitle = userResponse.projectTitle;
    const projectDescription = userResponse.projectDescription;
    const licenseName = userResponse.licenseName;
    const contributorUserNames = userResponse.contributorsGitUserName;
    const tests = userResponse.tests;
    const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
    const gitData = gitResponse.data;
    const gitName = gitData.login;
    const gitEmail = gitData.email;
    const gitUrl = gitData.html_url;
    const gitProfileImage = gitData.avatar_url;
    // contributor
    const contributorUserNamesArray = contributorUserNames.split(",");
    console.log(contributorUserNamesArray);
    // const  = listOfContributorsUserNames.
    // contributorsGitUserName
    var resultContributor;
    for (i = 0; i < contributorUserNamesArray.length; i++) {
        var contributorsGitUserName = contributorUserNamesArray[i]
        const gitResponse2 = await axios.get(`https://api.github.com/users/${contributorsGitUserName}`);
        var gitContribuProfileImage = gitResponse2.data.avatar_url;
        var gitContribuUrl = gitResponse2.data.html_url;
        var gitContribuEmail = gitResponse2.data.email;