var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var ordersManager = require("../manager/ordersManager");

/* create api */
/* creating new order */
/* 
{ 
    ...[All the Static Fields]
}
*/
router.post("/create", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let order = req.body;

  let om = new ordersManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  om.createOrder(order, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* edit api */
/* editing order */
/* 
{
    "Id" : "12", 
    ...[To be Edited the Static Fields]
}
*/
router.put("/edit", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let order = req.body;

  let om = new ordersManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  om.editOrder(order, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* get api */
/* get order(s) */
/* 
{
    ...[Necessary Filter Fields], [$[FieldName] for Filter Fields Operator]
}
*/
router.get("/get", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let query = req.query;

  let om = new ordersManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  om.getOrders(query, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

module.exports = router;
