const baseManager = require('./baseManager');
const usersData = require('../dal/usersData');
const bcrypt = require('bcrypt');
const config = require('../config');
const jwt = require('../utilities/auth');

class authManager extends baseManager {
    constructor(dbConnection) {
        super(dbConnection);
        this.uData = new usersData(this.dbConnection); 
    }

    /* login api manager */
    login(logInViewModel, response) {
        let uData = this.uData;
        
        return uData.getUserByEmail(logInViewModel.Email.trim()).then(function(dbUser) {
            return new Promise(function(resolve,reject) {
                if(dbUser.length == 0) {
                    reject('Wrong email or password');
                } else {
                    bcrypt.compare(logInViewModel.Password, dbUser[0].PasswordHash, function(err, res) {
                        if(err || !res) {
                            reject('Wrong email or password');
                        }
                        if(res) {
                            let auth = new jwt();
                            response.success = true;
                            response.entity = {};
                            response.entity.token = auth.createJWToken(dbUser);
                            console.log(response.entity.token);
                            resolve();
                        } 
                    });
                }
            });
        }).catch(function(error) {
            response.success = false;
            response.errorDescriptions.push(error);
        });
    }
}

module.exports = authManager;