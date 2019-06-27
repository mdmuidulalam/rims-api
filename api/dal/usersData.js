var baseData = require('./baseData');
var userModel = require('../models/user');

class usersdata extends baseData {
    constructor(dbConnection) {
        super(dbConnection);
        this.users = new userModel(dbConnection).Users;
    }

    /* Inset Data in Users Table */

    /// Insert user in users table
    insertUser(user) {
        return this.users.create({
                Name: user.name,
                Email: user.email,
                PasswordHash: user.passwordHash,
                UserId: user.userId
            });
    }

    /* End Inset Data in Users Table */

    /* Get Data From User Table */

    /// Get user by email from user table
    getUserByEmail(email) {
        return this.users.findAll({
                limit: 1,
                where: {
                    Email: {
                        $eq: email
                    }
                }
            });
    }

    /* End Get Data From User Table */
}

module.exports = usersdata;