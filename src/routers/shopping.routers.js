const { Router } = require('express');
const { getShopping, createShopping } = require('../controllers/shopping.controllers')
const router = Router();

// localhost:5000/shopping
router.get('/', getShopping);
// localhost:5000/shopping
router.post('/', createShopping);

module.exports = router;
