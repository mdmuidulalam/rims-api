const Promise = require("bluebird");

var jwt = require('jsonwebtoken');
var config = require('../config');

class jwtConfig {
    verifyJWTToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.jwt.secret, (err, decodedToken) =>  {
                if (err || !decodedToken) {
                    return reject(err);
                }

                resolve(decodedToken);
            });
        });
    }

    createJWToken(details) {
        if (typeof details !== 'object') {
            details = {};
        }

        let token = jwt.sign({
                data: details
            }, config.jwt.secret, {
            expiresIn: config.jwt.maxAge
        });

        return token;
    }
}

module.exports = jwtConfig;