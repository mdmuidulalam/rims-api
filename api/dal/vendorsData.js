var Sequelize = require("sequelize");
const Op = Sequelize.Op;
var baseData = require("./baseData");
var dynamicModel = require("../models/dynamicModel");

class vendorsData extends baseData {
  constructor(dbConnection, vendorsColumns) {
    super(dbConnection);
    this.vendors = new dynamicModel(dbConnection).getModel(
      "Vendors",
      vendorsColumns
    );
  }

  /* Inset data in vendors table */

  /// Insert vendor in vendors table
  insertVendor(vendor) {
    return this.vendors.create(vendor);
  }

  /* End inset data in vendors table */

  /* Update data in vendors table */

  /// Update vendor in vendors table
  updateVendor(vendor) {
    let id = vendor["Id"];
    delete vendor["Id"];
    return this.vendors.update(vendor, { where: { Id: { [Op.eq]: id } } });
  }

  /* End update data in vendors table */

  /* Get data in vendors table */

  /// Get vendor in vendors table
  getVendors(query) {
    query = this.getSequelizeQuery(query);
    return this.vendors.findAll({ where: query });
  }

  /* End get data in vendors table */
}

module.exports = vendorsData;
