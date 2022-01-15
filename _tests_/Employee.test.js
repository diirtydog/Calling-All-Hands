const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jim', '09', 'andrew.derek.wales@gmail.com');
    const employeeId = employee.id;
    const eMail = employee.email;

    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe(employeeId);
    expect(employee.email).toBe(eMail);   
});

test('Creates a name for the employee via the getName()', () => {
    const testName = 'Jim';
    const employee = new Employee(testName);
    expect(employee.name).toBe(testName);
});

test('creates an id for the employee', () => {
    const testValue = 99;
    const employee = new Employee('Jim', testValue);
    expect(employee.id).toBe(testValue);
});

test('Creates an email for the employee via getEmail()', () => {
    const testEmail = 'andrew.derek.wales@gmail.com';
    const employee = new Employee('Jim', 'id', testEmail);
    expect(employee.email).toBe(testEmail);
});

test('Makes sure getRole() returns Employee', () => {
    const testRole = 'Employee';
    const employee = new Employee();
    expect(employee.getRole()).toBe(testRole);
})
