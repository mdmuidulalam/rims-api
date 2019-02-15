var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var customersManager = require("../manager/customersManager");

/* create api */
/* creating new customer */
/* 
{ 
    ...[All the Static Fields]
}
*/
router.post("/create", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let customer = req.body;

  let pm = new customersManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  pm.createCustomer(customer, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* edit api */
/* editing customer */
/* 
{
    "Id" : "12", 
    ...[To be Edited the Static Fields]
}
*/
router.put("/edit", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let customer = req.body;

  let pm = new customersManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  pm.editCustomer(customer, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* get api */
/* get customer(s) */
/* 
{
    ...[Necessary Filter Fields], [$[FieldName] for Filter Fields Operator]
}
*/
router.get("/get", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let query = req.query;

  let cm = new customersManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  cm.getCustomers(query, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

module.exports = router;
