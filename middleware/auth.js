const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    //get token header
    const token = req.header('x-auth-token');

    //check if not token
    if (!token) {
        return res.status(400).json({ msg: 'no token auth denied' });
    }

    //verificamos token y devolvemos el user
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'token not valid' });
    }

}