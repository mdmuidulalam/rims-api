var Sequelize = require('sequelize');

class user {
    constructor(dbConnection) {
        this.Users = dbConnection.define('Users', {
            Id: { type: Sequelize.INTEGER },
            Name: { type: Sequelize.STRING },
            Email: { type: Sequelize.STRING },
            PasswordHash: { type: Sequelize.STRING },
            UserId: { type: Sequelize.STRING }
        });
    }
}


module.exports = user;
