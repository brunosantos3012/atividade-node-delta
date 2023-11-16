const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token nao informado!' });
    try {
        const payload = jwt.verify(authorization, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token expirado ou inválido' });
   }
};

module.exports = { 
    validateToken
};