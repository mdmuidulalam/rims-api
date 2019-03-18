const baseManager = require("./baseManager");
const skeletonTables = require("../enums/skeletonTables");
const Promise = require("bluebird");

var customersData = require("../dal/customersData");

class customersManager extends baseManager {
  constructor(dbConnection, site, cacheService) {
    super(dbConnection, site, cacheService);
  }

  createCustomer(customer, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let customersColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Customers
        );
        let cData = new customersData(this.dbConnection, customersColumns);

        return cData.insertCustomer(customer);
      })
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }

  editCustomer(customer, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let customersColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Customers
        );
        let cData = new customersData(this.dbConnection, customersColumns);

        return cData.updateCustomer(customer);
      })
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }

  getCustomers(query, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let customersColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Customers
        );
        let cData = new customersData(this.dbConnection, customersColumns);

        return cData.getCustomers(query);
      })
      .then(customers => {
        response.success = true;
        response.entity = customers;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }
}

module.exports = customersManager;
