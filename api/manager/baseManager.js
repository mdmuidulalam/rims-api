const dataSchemaData = require("../dal/dataSchemaData");

class baseManager {
  constructor(dbConnection, site, cacheService) {
    this.dbConnection = dbConnection;
    this.site = site;
    this.cacheService = cacheService;
    this.dData = new dataSchemaData(this.dbConnection);
  }

  /* cache */

  /* get DataSchemas form cache */
  getDataSchemas() {
    let dataSchemasKey = this.site + "DataSchemasKey";

    return this.cacheService.get(dataSchemasKey).catch(error => {
      return this.dData.getDataSchemas().then(dataSchemas => {
        dataSchemas = dataSchemas.map(dataSchema => dataSchema.toJSON());
        return this.cacheService.set(dataSchemasKey, dataSchemas);
      });
    });
  }

  /* end cache */
}

module.exports = baseManager;
