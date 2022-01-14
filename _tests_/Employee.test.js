const Employee = require('../lib/Employee')

// test for the getName() method
test('creates an employee object', () => {
    const employee = new Employee('Jim')

    expect(Employee.name).toBe('Jim')
});