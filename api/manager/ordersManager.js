const baseManager = require("./baseManager");
const skeletonTables = require("../enums/skeletonTables");

var ordersData = require("../dal/ordersData");

class ordersManager extends baseManager {
  constructor(dbConnection, site, cacheService) {
    super(dbConnection, site, cacheService);
  }

  createOrder(order, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let ordersColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Orders
        );
        let oData = new ordersData(this.dbConnection, ordersColumns);

        return oData.insertOrder(order);
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

  editOrder(order, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let ordersColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Orders
        );
        let oData = new ordersData(this.dbConnection, ordersColumns);

        return oData.updateOrder(order);
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

  getOrders(query, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let ordersColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Orders
        );
        let oData = new ordersData(this.dbConnection, ordersColumns);

        return oData.getOrders(query);
      })
      .then(orders => {
        response.success = true;
        response.entity = orders;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }
}

module.exports = ordersManager;
