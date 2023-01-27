const { Router } = require("express");
const {
  getCustomers,
  createCustomer,
  updateCustomers,
  deleteCustomers,
  loginCustomer,
} = require("../controllers/customers.controllers");
const router = Router();
const auth = require("./../middlewares/authorization");
// localhost:5000/customers
router.get("/", auth, getCustomers);
// localhost:5000/customers
router.post("/", createCustomer);
// localhost:5000/customers/login
router.post("/login", loginCustomer);
// localhost:5000/customers/{id}
router.put("/:id", auth, updateCustomers);
// localhost:5000/customers/{id}
router.delete("/:id", auth, deleteCustomers);

module.exports = router;
