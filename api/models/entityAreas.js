var Sequelize = require("sequelize");

class entityAreas {
  constructor(dbConnection) {
    this.EntityAreas = dbConnection.define(
      "EntityAreas",
      {
        Id: { type: Sequelize.INTEGER },
        EntityTypes: { type: Sequelize.INTEGER },
        AreaName: { type: Sequelize.STRING }
      },
      {
        timestamps: false
      }
    );
  }
}

module.exports = entityAreas;
