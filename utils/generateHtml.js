const Engineer = require("../lib/Engineer");


function generateManager(managers) {
    //console.log(managers);
}

const generateEngineer = (data) => {
    console.log(data)
    return `
        <section class="card">
            <h2>${data.name}</h2>
            <h3>${data.role}</h3>
            <h4>Employee ID:${data.id}</h4>
            <h4>GitHub https://github.com/${data.github}</h4>
        </section>
        `;
}



function generateIntern(data) {
    //console.log(interns);
}

function generatePage(data) {
    console.log(data);
}

module.exports =  generateEngineer;
//{generateManager, generateEngineer, generateIntern, generatePage};