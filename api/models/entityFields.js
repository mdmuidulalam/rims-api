var Sequelize = require("sequelize");

class entityFields {
  constructor(dbConnection) {
    this.EntityFields = dbConnection.define(
      "EntityFields",
      {
        Id: { type: Sequelize.INTEGER },
        EntityAreaId: { type: Sequelize.INTEGER },
        AreaName: { type: Sequelize.STRING },
        EntityFieldType: { type: Sequelize.INTEGER },
        Accessor: { type: Sequelize.STRING },
        SortOrder: { type: Sequelize.INTEGER }
      },
      {
        timestamps: false
      }
    );
  }
}

module.exports = entityFields;
