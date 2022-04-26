// setting variables
const Employee = require('./sheet/lib/Employee')
const Engineer = require('./sheet/lib/Engineer');
const Intern = require('./sheet/lib/Intern');
const Manager = require('./sheet/lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./sheet/src/generateHtml');

teamArray = [];

//using inquirer to prompt user to add manager
const addManager = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter Manager's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter Manager's employee ID::",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter Manager's email address:",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter Manager's office number:",
            }
        ]).then(({ name, id, email, officeNumber }) => {
            const newManager = new Manager(name, id, email, officeNumber)
            teamArray.push(newManager)
            addTeam()
        })
}

//using inquirer to prompt user options to add engineer, intern, or generate HTML
const addTeam = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'selectEmployee',
            message: 'Please select next type of employee to add',
            choices: ['Engineer', 'Intern', 'Finished, exit application']
        }]).then(answers => {
            switch (answers.selectEmployee) {
                case 'Engineer':
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                default:
                    fs.writeFileSync('dist/index.html', generateTeam(teamArray))
            }
        })
}

//using inquirer to prompt user to add engineer
const addEngineer = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter Engineer's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter Engineer's employee ID:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter Engineer's email address",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter Engineer's GitHub username:",
            },
        ]).then(({ name, id, email, github }) => {
            const newEngineer = new Engineer(name, id, email, github)
            teamArray.push(newEngineer)
            addTeam()
        })
}

//using inquirer to prompt user to add intern
const addIntern = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter Intern's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter Intern's employee ID:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter Intern's email address:",
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter Intern's school name:",
            },
        ]).then(({ name, id, email, school }) => {
            const newIntern = new Intern(name, id, email, school)
            teamArray.push(newIntern)
            addTeam()
        })
}

addManager();