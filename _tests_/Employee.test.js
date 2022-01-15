const Employee = require('../lib/Employee')

// test for the getName() method
test('creates an employee name', () => {
    
    const name = 'jim';
    const y = new Employee(name);

    expect(getName).toEqual(name);
});

test('creates an id for the employee', () => {
    expect(Employee.getId()).tobe(id);
});