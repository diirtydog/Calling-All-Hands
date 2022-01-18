const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const writeFile = require('./src/page-write');
const generatePage = require('./utils/generateHtml')
const inquirer = require('inquirer');
//const generateEngineer = require('./utils/generateHtml');
const managers = [];
const engineers = [];
const interns = [];

const promptManager = [
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name guey?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of the manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the manager?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of this manager?'
        },
        {
            type: 'input',
            name: 'mamajama',
            message: 'Is she a bad mama jama lol?'
        }
];

const promptHands = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What type of hand would you like to add to the team?',
            name: 'action',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(({ action }) => {
        if (action === 'Engineer') {
            promptEngineer();
        } else {
            promptIntern();
        }
    });
}

const promptEngineer = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer you are trying to add?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id for the engineer you are adding?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the engineer you are adding?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the engineer you are adding?'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee to the current team?',
            default: true
        }
    ])
    .then (function({ name, id, email, github, confirmAdd }) {
        var engineer = new Engineer(name, id, email, github);
        engineers.push(engineer);
        // console.log(engineer.name);
        return confirmAdd;
    })
    .then((confirmAdd) => {  
        if (confirmAdd) {
            promptHands();
        } else {
           return generateEngineer(engineers);
        };
    })
}

const generateEngineer = () => {
    console.log(engineers[0].getRole())

    const pageArray = []
    const pageStart = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Super Fly</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="headerLine">
                <h1 class="page-title">Super Fly</h1>
            </div>
        </header>`

    pageArray.push(pageStart);

    for (let i = 0; i < engineers.length; i++) {
        let eachEmployee = `
        <div class="employee-card">
            <div class"card-head">
                <h2>${engineers[i].name}</h2>
                <h2>${engineers[i].getRole()}</h2>
            </div>
            <div class="card-body">
                <p>Employee ID: ${engineers[i].id}</p>
                <p>Email: ${engineers[i].email}</p>
        `
        if (engineers[i].officeNumber) {
            eachEmployee += `
            <p>Office Number:${engineers[i].officeNumber}</p>`
        }
        
        if (engineers[i].github) {
            eachEmployee += `
            <a href="https://github.com/${engineers[i].github}>`
        }

        if (engineers[i].school) {
            eachEmployee += `
            <p>University: ${engineers[i].school}`
        }
    }
    pageArray.push(eachEmployee);
}



const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern you would like to add to the team?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the name of the intern you would like to add to the team?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the intern you would like to add to the team?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is this intern attending?'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee to the current team?',
            default: false
        }
    ])
    .then ((data) => {
        var intern = new Intern(data);
        interns.push(intern);
        return data;
    })
    .then (({ confirmAdd }) => {
        if (confirmAdd) {
            promptHands();
        } else {
            return generateIntern(data);
        }
    });
}


function init() {
    inquirer.prompt(promptManager)
    .then(function({ name, id, email, officeNumber }) {
        var manager = new Manager(name, id, email, officeNumber);
        engineers.push(manager);
        return;
    })
    .then(promptHands)
    
    
}
    
init();