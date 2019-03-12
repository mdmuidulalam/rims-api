const baseManager = require("./baseManager");
var dataGridColumnsData = require("../dal/dataGridColumnsData");

class dataGridColumnsManager extends baseManager {
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
        response.errorDescriptions.push(error);
      });
  }
}

module.exports = dataGridColumnsManager;
