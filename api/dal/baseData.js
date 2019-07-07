var Sequelize = require("sequelize");
const Op = Sequelize.Op;

class baseData {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    getSequelizeQuery(query){
        for( let key in query) {
            if(!key.startsWith('$')) {
                if(query.hasOwnProperty('$' + key)) {
                    let value = query[key];
                    query[key] = { };
                    query[key][Op[query['$' + key]]] = value;
                    delete query['$' + key];
                } else {
                    let value = query[key];
                    query[key] = { };
                    query[key][Op.eq] = value;
                }
            }   
        }
        return query;
    }
}

module.exports = baseData;