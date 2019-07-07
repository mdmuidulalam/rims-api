var Sequelize = require("sequelize");
const Op = Sequelize.Op;
var baseData = require("./baseData");
var dynamicModel = require("../models/dynamicModel");

class ordersData extends baseData {
  constructor(dbConnection, ordersColumns) {
    super(dbConnection);
    this.orders = new dynamicModel(dbConnection).getModel(
      "Orders",
      ordersColumns
    );
  }

  /* Inset data in orders table */

  /// Insert order in orders table
  insertOrder(order) {
    return this.orders.create(order);
  }

  /* End inset data in orders table */

  /* Update data in orders table */

  /// Update order in orders table
  updateOrder(order) {
    let id = order["Id"];
    delete order["Id"];
    return this.orders.update(order, { where: { Id: { [Op.eq]: id } } });
  }

  /* End update data in orders table */

  /* Get data in orders table */

  /// Get order in orders table
  getOrders(query) {
    query = this.getSequelizeQuery(query);
    return this.orders.findAll({ where: query });
  }

  /* End get data in orders table */
}

module.exports = ordersData;
