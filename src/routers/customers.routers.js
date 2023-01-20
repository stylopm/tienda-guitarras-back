const { Router } = require('express');
const { getCustomers, createCustomer, updateCustomers, deleteCustomers } = require('../controllers/customers.controllers')
const router = Router();

// localhost:5000/customers
router.get('/', getCustomers);
// localhost:5000/customers
router.post('/', createCustomer);
// localhost:5000/customers/{id}
router.put('/:id', updateCustomers);
// localhost:5000/customers/{id}
router.delete('/:id', deleteCustomers);

module.exports = router;