const baseManager = require("./baseManager");
const skeletonTables = require("../enums/skeletonTables");

var vendorsData = require("../dal/vendorsData");

class vendorsManager extends baseManager {
  constructor(dbConnection, site, cacheService) {
    super(dbConnection, site, cacheService);
  }

  createVendor(vendor, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let vendorsColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Vendors
        );
        let vData = new vendorsData(this.dbConnection, vendorsColumns);

        return vData.insertVendor(vendor);
      })
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }

  editVendor(vendor, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let vendorsColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Vendors
        );
        let vData = new vendorsData(this.dbConnection, vendorsColumns);

        return vData.updateVendor(vendor);
      })
      .then(() => {
        response.success = true;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }

  getVendors(query, response) {
    return this.getDataSchemas()
      .then(dataSchemas => {
        let vendorsColumns = dataSchemas.filter(
          ds => ds.TableId == skeletonTables.Vendors
        );
        let vData = new vendorsData(this.dbConnection, vendorsColumns);

        return vData.getVendors(query);
      })
      .then(vendor => {
        response.success = true;
        response.entity = vendor;
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }
}

module.exports = vendorsManager;
