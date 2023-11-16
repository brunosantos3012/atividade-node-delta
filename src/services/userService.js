const validateNotExistsUser = (user) => {
    return !!user && !!user.length == 0;
}

module.exports = {
    validateNotExistsUser
}