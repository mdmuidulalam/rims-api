const baseManager = require('./baseManager');
const usersData = require('../dal/usersData');
const bcrypt = require('bcrypt');
const config = require('../config');

class accountsManager extends baseManager {
    constructor(dbConnection) {
        super(dbConnection);
        this.uData = new usersData(this.dbConnection); 
    }
    
    /* signup api manager */
    signup(signUpViewModel, response) {
        let uData = this.uData;

        return uData.getUserByEmail(signUpViewModel.Email).then(function(dbUser) {
            if(dbUser.length == 0) {
                return new Promise(function(resolve,reject) {
                    bcrypt.hash(signUpViewModel.Password, config.password.salt, function(err,hash) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                name : signUpViewModel.Name,
                                email : signUpViewModel.Email,
                                passwordHash: hash,
                                userId: signUpViewModel.Email.replace("@", ".").toLowerCase()
                            });
                        }
                    });
                });
            } else  {
                throw 'DuplicateEmail';
            }
        }).then(function(user) {
            return uData.insertUser(user).then(function(){
                response.success = true;
            });
        }).catch(function(error) {
            response.success = false;
            response.errorDescriptions.push(error);
        });
    }
}   

module.exports = accountsManager;