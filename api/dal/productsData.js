var baseData = require('./baseData');
var dynamicModel = require('../models/dynamicModel');

class productsData extends baseData {
    constructor(dbConnection, productsColumns) {
        super(dbConnection);
        this.products = new dynamicModel(dbConnection).getModel('Products', productsColumns);
    }

    /* Inset data in products table */

    /// Insert product in products table
    insertProduct(product) {
        return this.products.create(product);
    }

    /* End inset data in products table */

    /* Update data in products table */

    /// Update product in products table
    updateProduct(product) {
        let id = product['Id'];
        delete product['Id'];
        return this.products.update(product, {where: { Id : { $eq: id }}});
    }

    /* End update data in products table */

    /* Get data in products table */

    /// Get product in products table
    getProducts(query) {
        query = this.getSequelizeQuery(query);
        return this.products.findAll({ where: query});
    }

    /* End get data in products table */
}

module.exports = productsData;