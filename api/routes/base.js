const Sequelize = require('sequelize');
const config = require('../config');
const cache = require('../utilities/cache');

const cacheService = new cache(60*60);

class base {
    constructor() {
        this.site = 'base'; 
        this.dbConnection = new Sequelize(config.database.name, config.database.user, config.database.password, {
            dialect: config.database.dialect,
            host: config.database.host,
            port: config.database.port
        });
        this.cacheService = cacheService;
    }
}

module.exports = base;