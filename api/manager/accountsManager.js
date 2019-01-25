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
    signup(signUpViewModel, response, callback) {
        let uData = this.uData;

        return uData.getUserByEmail(signUpViewModel.Email).then(function(dbUser) {
            if(dbUser.length == 0)
            {
                var user = {
                    name : signUpViewModel.Name,
                    email : signUpViewModel.Email,
                    passwordHash: bcrypt.hashSync(signUpViewModel.Password, config.password.salt),
                    userId: signUpViewModel.Email.replace("@", ".").toLowerCase()
                };
                return user;
            }
            else 
            {
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