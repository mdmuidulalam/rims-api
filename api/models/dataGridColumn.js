var Sequelize = require("sequelize");

class dataGridColumn {
  constructor(dbConnection) {
    this.DataGridColumns = dbConnection.define(
      "DataGridColumns",
      {
        Id: { type: Sequelize.INTEGER },
        GridType: { type: Sequelize.INTEGER },
        Header: { type: Sequelize.STRING },
        Accessor: { type: Sequelize.STRING },
        SortOrder: { type: Sequelize.INTEGER }
      },
      {
        timestamps: false
      }
    );
  }
}

module.exports = dataGridColumn;
