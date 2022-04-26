// setting variables
const Employee = require('./sheet/lib/Employee')
const Engineer = require('./sheet/lib/Engineer');
const Intern = require('./sheet/lib/Intern');
const Manager = require('./sheet/lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./sheet/src/generateHtml');

teamArray = [];

// //function to initialize applications
// function init() {
//     runHtml();
//     addTeam();
// }

//function to prompt user to add team members and their info
function addManager() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter Manager's name.",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter Manager's employee ID",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter Manager's email address",
            } {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter Manager's office number",
            } {
                type: 'list',
                name: 'addMember',
                message: "Which kind of employee would you like to add next?",
            }
        ]);
    .then(({ name, email, officeNumber }) => {
        const newManager = new Manager(name, id, email, officeNumber)
        teamArray.push(newManager)
    })
}
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});

// {
//     type: 'list',
//     name: 'role',
//     choices: [
//         'Engineer',
//         'Intern',
//         'Manager',
//     ],
//     message: "Please select Manager's role",
// },