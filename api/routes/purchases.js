var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var purchasesManager = require("../manager/purchasesManager");

/* create api */
/* creating new purchase */
/* 
{ 
    ...[All the Static Fields]
}
*/
router.post("/create", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let purchase = req.body;

  let pm = new purchasesManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  pm.createPurchase(purchase, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* edit api */
/* editing purchase */
/* 
{
    "Id" : "12", 
    ...[To be Edited the Static Fields]
}
*/
router.put("/edit", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let purchase = req.body;

  let pm = new purchasesManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  pm.editPurchase(purchase, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* get api */
/* get purchase(s) */
/* 
{
    ...[Necessary Filter Fields], [$[FieldName] for Filter Fields Operator]
}
*/
router.get("/get", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let query = req.query;

  let pm = new purchasesManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  pm.getPurchases(query, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

module.exports = router;
