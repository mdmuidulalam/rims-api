var config = require('../config');
var jwtConfig = require('../utilities/auth');

class jwtMW {
    constructor(){ }

    verifyJWT_MW(req, res, next) {
        let token = req.headers['authorization'];
        if(token === undefined || token === '') {
            res.status(400).json({message: "Authentication failed!"});
            return;
        }

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        new jwtConfig().verifyJWTToken(token).then((decodedToken) => {
            req.user = decodedToken.data;
            next();
        }).catch((err) => {
            res.status(400).json({message: "Authentication failed!"});
        });
    }
}

module.exports = jwtMW;
