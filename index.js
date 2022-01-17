const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const writeFile = require('./src/page-write');
const generatePage = require('./utils/generateHtml')
const inquirer = require('inquirer');
const generateEngineer = require('./utils/generateHtml');
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
    .then ((data) => {
        var engineer = new Engineer(data);
        engineers.push(engineer);
        console.log(engineers);
        return data;
    })
    .then(({ confirmAdd }) => {  
        if (confirmAdd) {
            promptHands();
        } else {
           return generateEngineer(engineers);
        };
    })
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
    .then((data) => {
        var manager = new Manager(data);
        managers.push(manager);
        return data;
    })
    .then(promptHands)
    
    
}
    
init();