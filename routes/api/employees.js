const express = require('express');
var router = express.Router();
const employeesCtrl = require('../../conrollers/api/employees');

// employeesCtrl.getAllEmployees,
// employeesCtrl.deleteEmployee,
// employeesCtrl.updateEmployee,
// employeesCtrl.createNewEmployee,
// employeesCtrl.showEmployee

// Index
// GET route to fetch all employees
router.get('/', employeesCtrl.getAllEmployees);


// New - Will be handled by React application


// DELETE route to delete an employee by ID
router.delete('/:id', employeesCtrl.deleteEmployee);

// UPDATE route to update an employee by ID
router.put('/:id', employeesCtrl.updateEmployee);

// CREATE route to create a new employee
router.post('/', employeesCtrl.createNewEmployee);
  

// Edit - Will be handled by React application


// Show 
router.get('/:id', employeesCtrl.showEmployee);


module.exports = router