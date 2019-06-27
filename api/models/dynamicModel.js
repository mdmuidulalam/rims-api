var Sequelize = require("sequelize");
var dataTypes = require("../enums/dataTypes");

class dynamicModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  getModel(table, columns) {
    let entityModel = {};

    columns.forEach(col => {
      entityModel[col.DataCode] = { type: this.getDataType(col.DataType) };
    });
    return this.dbConnection.define(table, entityModel);
  }

  getDataType(dataType) {
    switch (dataType) {
      case dataTypes.Int:
        return Sequelize.INTEGER;
      case dataTypes.String:
        return Sequelize.STRING;
      case dataTypes.Float:
        return Sequelize.FLOAT;
      case dataTypes.TextArea:
        return Sequelize.STRING;
    }
  }
}

module.exports = dynamicModel;
