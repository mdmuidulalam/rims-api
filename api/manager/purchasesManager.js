const baseManager = require("./baseManager");
const skeletonTables = require("../enums/skeletonTables");

var purchasesData = require("../dal/purchasesData");

class purchasesManager extends baseManager {
  constructor(dbConnection, site, cacheService) {
    super(dbConnection, site, cacheService);
  }

  createPurchase(purchase, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let purchasesColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Purchases
        );
        let pData = new purchasesData(this.dbConnection, purchasesColumns);

        return pData.insertPurchase(purchase);
      })
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }

  editPurchase(purchase, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let purchasesColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Purchases
        );
        let pData = new purchasesData(this.dbConnection, purchasesColumns);

        return pData.updatePurchase(purchase);
      })
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }

  getPurchases(query, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let purchasesColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Purchases
        );
        let pData = new purchasesData(this.dbConnection, purchasesColumns);

        return pData.getPurchases(query);
      })
      .then(purchases => {
        response.success = true;
        response.entity = purchases;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }
}

module.exports = purchasesManager;
