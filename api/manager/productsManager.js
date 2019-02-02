const baseManager = require('./baseManager');

class productsManager extends baseManager {
    constructor(dbConnection, site, cacheService) {
        super(dbConnection, site, cacheService);
    }

    createProduct(product, response){
        this.getDataSchemas().then(function(dataSchemas) {
            console.log(dataSchemas[0]);
        });
    }
    
}   

module.exports = productsManager;