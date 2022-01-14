const Employee = require('./Employee');

class Engineer {
    constructor(name = '') {
        super(name);
        github = getGithub();
    }

    getGithub() {
        
    }

    getRole() {
        return Engineer;
    }
}

module.exports = Engineer