var baseData = require("./baseData");
var entityAreasModel = require("../models/entityAreas");

class entityAreasData extends baseData {
  constructor(dbConnection) {
    super(dbConnection);
    this.entityAreas = new entityAreasModel(dbConnection).EntityAreas;
  }

  /* Get data in entityAreas table */

  getEntityAreas() {
    return this.entityAreas.findAll();
  }

  /* End get data in entityAreas table */
}

module.exports = entityAreasData;
