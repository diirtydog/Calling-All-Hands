

function generateManager(data) {
    console.log(managers);
}

function generateEngineer(engineers) {
    //console.log(engineers);
    return `
        <section class="card">
            <h2>${engineers.name}</h2>
            <h3>${engineers.role}</h3>
            <h4>Employee ID:${engineers.id}</h4>
            <h4>GitHub https://github.com/${engineers.github}</h4>
        `;
}



function generateIntern(data) {
    console.log(interns);
}

function generatePage(data) {
    console.log(data);
}

module.exports = generateEngineer;