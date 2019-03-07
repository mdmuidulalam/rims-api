var baseData = require("./baseData");
var dataGridColumnModel = require("../models/dataGridColumn");

class dataGridColumnsData extends baseData {
  constructor(dbConnection) {
    super(dbConnection);
    this.dataGridColumns = new dataGridColumnModel(
      dbConnection
    ).DataGridColumns;
  }

  /* Get data in dataGridColumns table */

  /// Get dataGridColumn in dataGridColumns table
  getDataGridColumns() {
    return this.dataGridColumns.findAll();
  }

  /* End get data in dataGridColumns table */
}

module.exports = dataGridColumnsData;
