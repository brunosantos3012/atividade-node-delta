const validateLoginFields = (req, res, next) => {
    if (!req.body.id) return res.status(400).json({ message: 'O atributo "id" é obrigatório'});
    if (!req.body.password) return res.status(400).json({ message: 'O atributo "password" é obrigatório'});
    if (typeof req.body.id != "number") return res.status(400).json({ message: 'O atributo "id" deve ser do tipo um number'});
    if (typeof req.body.password != "string") return res.status(400).json({ message: 'O atributo "password" deve ser do tipo string'});
    
    next();
}

module.exports = {
    validateLoginFields
}