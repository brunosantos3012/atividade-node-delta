const validateTaskFields = (req, res, next) => {
    if (!req.body.title) return res.status(400).json({ message: 'O atributo "title" é obrigatório'});
    if (!req.body.description) return res.status(400).json({ message: 'O atributo "description" é obrigatório'});
    if (req.body.done === undefined) return res.status(400).json({ message: 'O atributo "done" é obrigatório'});
    if (typeof req.body.done != "boolean") return res.status(400).json({ message: 'O atributo "done" deve ser booleano'});
    if (typeof req.body.title != "string") return res.status(400).json({ message: 'O atributo "title" deve ser uma string'});
    if (typeof req.body.description != "string") return res.status(400).json({ message: 'O atributo "description" deve ser uma string'});

    next();
}

module.exports = {
    validateTaskFields
}