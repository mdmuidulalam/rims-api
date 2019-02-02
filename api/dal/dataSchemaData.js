var baseData = require('./baseData');
var dataSchemaModel = require('../models/dataSchema');

class dataSchemaData extends baseData {
    constructor(dbConnection) {
        super(dbConnection);
        this.dataSchemas = new dataSchemaModel(dbConnection).DataSchemas;
    }
    /* Get Data From dataSchemas Table */

    /// Get user by email from user table
    getDataSchemas() {
        return this.dataSchemas.findAll({});
    }

    /* End Get Data From User Table */
}

module.exports = dataSchemaData;