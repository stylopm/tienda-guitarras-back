const Customer = require("./../models/customerSchema");
const { msgFormatConst, respApi } = require("../helpers/helpers");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getCustomers = async (req, res) => {
  const Customers = await Customer.find({});
  msgFormatConst("getCustomers");
  respApi(res, "success", Customers);
};

const createCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hasedPassword = await bcryptjs.hash(password, salt);
    const CustomerNew = await Customer.create({
      name,
      email,
      password: hasedPassword,
    });
    res.json({ msg: 'Usuario creado', data: CustomerNew });

    msgFormatConst("createCustomers");
  } catch (error) {
    respApi(res, "error", {
      msg: error,
    });
  }
};

const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    let foundCustomer = await Customer.findOne({
      email: email,
    });
    if (!foundCustomer) {
      return res.status(400).json({ msg: "El cliente no esta registrado" });
    }
    const passSuccess = await bcryptjs.compare(
      password,
      foundCustomer.password
    );
    if (!passSuccess) {
      return await res.status(400).json({
        msg: "Password incorrecto",
      });
    }
    const payload = {
      user: {
        id: foundCustomer.id,
      },
    };
    if (email && passSuccess) {
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 3600000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    }
  } catch (error) {
    respApi(res, "error", {
      msg: error,
    });
  }
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
  loginCustomer,
};
