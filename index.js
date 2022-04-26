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
const addManager = () => {
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
            }
        ]).then(({ name, id, email, officeNumber }) => {
            const newManager = new Manager(name, id, email, officeNumber)
            teamArray.push(newManager)
        })
}

const addTeam = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'Please select employee to add next',
            message: 'selectEmployee',
            choices: ['engineer', 'intern', 'exit']
        }]).then(answers => {
            switch (answers.selectEmployee) {
                case 'engineer':
                    addEngineer()
                    break;
                case 'intern':
                    addIntern()
                    break;
                default:
                    fs.writeFileSync('dist/index.html', generateTeam(teamArray))
            }
        })
}

const addEngineer = () => {
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
    ]).then(({ name, id, email, github }) => {
        const newEngineer = new Engineer(name, id, email, github) //create a new constructor with new values. 
        team.push(newEngineer)
        createTeam()
    })
}

const addIntern = () => {
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
                }