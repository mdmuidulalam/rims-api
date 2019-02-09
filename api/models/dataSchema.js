var Sequelize = require('sequelize');

class dataSchemas {
    constructor(dbConnection) {
        this.DataSchemas = dbConnection.define('DataSchemas', {
            Id: { type: Sequelize.INTEGER },
            TableId: { type: Sequelize.INTEGER },
            DataName: { type: Sequelize.STRING },
            DataCode: { type: Sequelize.STRING },
            DataType: { type: Sequelize.INTEGER },
            DataFieldType: { type: Sequelize.INTEGER },
            Required: { type: Sequelize.BOOLEAN },
            ValueScript: { type: Sequelize.STRING }
        },{
            timestamps: false
        });
    }
}

module.exports = dataSchemas;