var baseData = require('./baseData');
var dynamicModel = require('../models/dynamicModel');

class productsData extends baseData {
    constructor(dbConnection, productsColumns) {
        super(dbConnection);
        this.products = new dynamicModel(dbConnection).getModel('Products', productsColumns);
    }

    /* Inset Data in products Table */

    /// Insert product in products table
    insertProduct(product) {
        return this.products.create(product);
    }

    /* End Inset Data in products Table */
}

module.exports = productsData;