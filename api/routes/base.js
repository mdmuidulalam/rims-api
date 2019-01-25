const Sequelize = require('sequelize');
const config = require('../config');

class base {
    constructor(){
        this.dbConnection = new Sequelize(config.database.name, config.database.user, config.database.password, {
            dialect: config.database.dialect,
            host: config.database.host,
            port: config.database.port
        });
    }
}

module.exports = base;