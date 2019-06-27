let Promise = require("bluebird");

const baseManager = require("./baseManager");
let dataGridColumnsData = require("../dal/dataGridColumnsData");
let entityAreasData = require("../dal/entityAreasData");
let entityFieldsData = require("../dal/entityFieldsData");

class clientViewsManager extends baseManager {
  constructor(dbConnection, site, cacheService) {
    super(dbConnection, site, cacheService);
  }

  getDataGridColumns(response) {
    let vData = new dataGridColumnsData(this.dbConnection);
    return vData
      .getDataGridColumns()
      .then(dataGridColumns => {
        response.success = true;
        response.entity = dataGridColumns;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }

  getEntityAreasAndFields(response) {
    response.entity = {};

    let eaData = new entityAreasData(this.dbConnection);
    let areasPromise = eaData.getEntityAreas().then(entityAreas => {
      response.entity["areas"] = entityAreas;
    });

    let efData = new entityFieldsData(this.dbConnection);
    let fieldsPromise = efData.getEntityFields().then(entityFields => {
      response.entity["fields"] = entityFields;
    });

    return Promise.all([areasPromise, fieldsPromise])
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }
}

module.exports = clientViewsManager;
