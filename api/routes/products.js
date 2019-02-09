var express = require('express');
var router = express.Router();

var responseViewModel = require('../utilities/responseViewModel');
var base = require('./base');
var productsManager = require('../manager/productsManager')

/* create api */
/* creating new product */
/* 
{ 
    ...[All the Static Fields]
}
*/
router.post('/create', function(req, res) {
    let response = new responseViewModel();
    let baseObj = new base();
    let product = req.body;

    let pm = new productsManager(baseObj.dbConnection, baseObj.site, baseObj.cacheService);

    pm.createProduct(product, response).finally( () => {
        res.send(response);
        baseObj.dbConnection.close();
    });
});

/* edit api */
/* editing product */
/* 
{
    "Id" : "12", 
    ...[To be Edited the Static Fields]
}
*/
router.put('/edit', function(req, res) {
    let response = new responseViewModel();
    let baseObj = new base();
    let product = req.body;

    let pm = new productsManager(baseObj.dbConnection, baseObj.site, baseObj.cacheService);

    pm.editProduct(product, response).finally( () => {
        res.send(response);
        baseObj.dbConnection.close();
    });
});

/* get api */
/* get product(s) */
/* 
{
    ...[Necessary Filter Fields], [$[FieldName] for Filter Fields Operator]
}
*/
router.get('/get', function(req, res) {
    let response = new responseViewModel();
    let baseObj = new base();
    let query = req.query;

    let pm = new productsManager(baseObj.dbConnection, baseObj.site, baseObj.cacheService);

    pm.getProducts(query, response).finally( () => {
        res.send(response);
        baseObj.dbConnection.close();
    });
});

module.exports = router;