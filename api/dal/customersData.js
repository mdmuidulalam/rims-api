var Sequelize = require("sequelize");
const Op = Sequelize.Op;
var baseData = require("./baseData");
var dynamicModel = require("../models/dynamicModel");

class customersData extends baseData {
  constructor(dbConnection, customersColumns) {
    super(dbConnection);
    this.customers = new dynamicModel(dbConnection).getModel(
      "Customers",
      customersColumns
    );
  }

  /* Inset data in customers table */

  /// Insert customer in customers table
  insertCustomer(customer) {
    return this.customers.create(customer);
  }

  /* End inset data in customers table */

  /* Update data in customers table */

  /// Update customer in customers table
  updateCustomer(customer) {
    let id = customer["Id"];
    delete customer["Id"];
    return this.customers.update(customer, { where: { Id: { [Op.eq]: id } } });
  }

  /* End update data in customers table */

  /* Get data in customers table */

  /// Get customer in customers table
  getCustomers(query) {
    query = this.getSequelizeQuery(query);
    return this.customers.findAll({ where: query });
  }

  /* End get data in customers table */
}

module.exports = customersData;
