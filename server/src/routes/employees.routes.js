const { Router } = require('express');
const router = Router();

const ctrlEmployees = require('../controllers/employees.controller');


router.get('/', ctrlEmployees.getEmployees);

router.post('/', ctrlEmployees.createEmployee);

router.get('/:id', ctrlEmployees.getEmployee);

router.put('/:id', ctrlEmployees.editEmployees);

router.delete('/:id', ctrlEmployees.deleteEmployees);

module.exports = router;