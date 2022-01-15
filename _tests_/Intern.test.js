const Intern = require('../lib/Intern');

test('Creates a school for the Intern via the getSchool()', () => {
    const testSchool = 'UT';
    const intern = new Intern('Jimmy', '89', 'asdf', testSchool);
    expect(intern.school).toBe(testSchool);
});

test('Makes sure getRole() returns intern', () => {
    const testRole = 'Intern';
    const intern = new Intern('Jimmy', '89', 'asdf', 'us');
    expect(intern.getRole()).toBe(testRole);
});