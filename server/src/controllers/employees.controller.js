const ctrlEmployees = {};
const Employee = require('../models/Employees');

ctrlEmployees.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

ctrlEmployees.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body)
  await newEmployee.save();
  res.json({ message: 'A new employee has been saved' })
};

ctrlEmployees.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.send(employee);
};

ctrlEmployees.editEmployees = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: `Employee with id: ${req.params.id} was updated` });
};

ctrlEmployees.deleteEmployees = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: `Employee with id: ${req.params.id} was deleted` });
};

module.exports = ctrlEmployees;