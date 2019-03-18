var baseData = require("./baseData");
var entityFieldsModel = require("../models/entityFields");

class entityFieldsData extends baseData {
  constructor(dbConnection) {
    super(dbConnection);
    this.entityFields = new entityFieldsModel(dbConnection).EntityFields;
  }

  /* Get data from EntityFields table */

  getEntityFields() {
    return this.entityFields.findAll();
  }

  /* End get data in EntityFields table */
}

module.exports = entityFieldsData;
