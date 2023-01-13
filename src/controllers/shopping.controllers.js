
const { msgFormatConst } = require('../helpers/helpers')

const getShopping = (req, res) => {
    res.send('Estoy leyendo un compra');
    msgFormatConst('getShopping');
}

const createShopping = (req, res) => {
    res.send('Estoy creador un compra');
    msgFormatConst('createShopping');
}

module.exports = {
    getShopping,
    createShopping,
}