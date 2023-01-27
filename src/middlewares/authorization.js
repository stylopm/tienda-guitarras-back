const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({
            msg: 'No hay un token, permiso no válido'
        })
    }
    try {
        const openToken = jwt.verify(token, process.env.SECRET)
        req.user = openToken.user
        next()
    } catch (error) {
        res.status(404).json({
            msg: 'Hubo un error',
            error
        })
    }
}