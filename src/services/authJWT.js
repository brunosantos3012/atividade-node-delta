const jwt = require('jsonwebtoken');

require('dotenv').config();

const createToken = (user) => {
    return jwt.sign(
        { data: user }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d', algorithm: 'HS256' }
    );
};

module.exports = {
    createToken,
};