var Sequelize = require("sequelize");
const Op = Sequelize.Op;
var baseData = require("./baseData");
var dynamicModel = require("../models/dynamicModel");

class purchasesData extends baseData {
  constructor(dbConnection, purchasesColumns) {
    super(dbConnection);
    this.purchases = new dynamicModel(dbConnection).getModel(
      "Purchases",
      purchasesColumns
    );
  }

  /* Inset data in purchases table */

  /// Insert purchase in purchases table
  insertPurchase(purchase) {
    return this.purchases.create(purchase);
  }

  /* End inset data in purchases table */

  /* Update data in purchases table */

  /// Update purchase in purchases table
  updatePurchase(purchase) {
    let id = purchase["Id"];
    delete purchase["Id"];
    return this.purchases.update(purchase, { where: { Id: { [Op.eq]: id } } });
  }

  /* End update data in purchases table */

  /* Get data in purchases table */

  /// Get purchase in purchases table
  getPurchases(query) {
    query = this.getSequelizeQuery(query);
    return this.purchases.findAll({ where: query });
  }

  /* End get data in purchases table */
}

module.exports = purchasesData;
