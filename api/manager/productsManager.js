const baseManager = require('./baseManager');
const skeletonTables = require('../enums/skeletonTables');
const Promise = require("bluebird");

var productsData = require('../dal/productsData');

class productsManager extends baseManager {
    constructor(dbConnection, site, cacheService) {
        super(dbConnection, site, cacheService);
    }

    createProduct(product, response){
        return this.getDataSchemas().then((dataSchemas) => {
            let productsColumns = dataSchemas.filter(ds => ds.TableId == skeletonTables.Products);
            let pData = new productsData(this.dbConnection, productsColumns);

            return pData.insertProduct(product);
        }).then(() => {
            response.success = true;
        }).catch((error) => {
            response.success = false;
            response.errorDescriptions.push(error);
        });
    }
}   

module.exports = productsManager;