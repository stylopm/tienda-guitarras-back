const Customer = require("./../models/customerSchema");
const { msgFormatConst, respApi } = require("../helpers/helpers");

const getCustomers = async (req, res) => {
  const Customers = await Customer.find({});
  msgFormatConst("getCustomers");
  respApi(res, 'success', Customers)
};

const createCustomer = async (req, res) => {
  const CustomerNew = await Customer.create(req.body);
  msgFormatConst("createCustomers");
  respApi(res, 'success', CustomerNew)
};

const updateCustomers = (req, res) => {
  res.send("Estoy update un usuario");
  msgFormatConst("updateCustomers");
};

const deleteCustomers = (req, res) => {
  res.send("Estoy delete un usuario");
  msgFormatConst("deleteCustomers");
};

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomers,
  deleteCustomers,
};
