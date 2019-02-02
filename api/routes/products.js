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
    
    pm.createProduct(product, response);
});

module.exports = router;