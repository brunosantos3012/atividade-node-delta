const validateUserFields = (req, res, next) => {
    if (!req.body.name) return res.status(400).json({ message: 'O atributo "name" é obrigatório'});
    if (!req.body.password) return res.status(400).json({ message: 'O atributo "password" é obrigatório'});
    if (typeof req.body.name != "string") return res.status(400).json({ message: 'O atributo "name" deve ser uma string'});
    if (typeof req.body.password != "string") return res.status(400).json({ message: 'O atributo "password" deve ser uma string'});
    
    next();
}

module.exports = {
    validateUserFields
}