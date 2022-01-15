const Employee = require('./Employee');

class Engineer {
    constructor(name = '') {
        super(name);
        github = getGithub();
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return Engineer;
    }
}

module.exports = Engineer