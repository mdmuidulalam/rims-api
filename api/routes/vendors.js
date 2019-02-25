var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var vendorsManager = require("../manager/vendorsManager");

/* create api */
/* creating new vendor */
/* 
{ 
    ...[All the Static Fields]
}
*/
router.post("/create", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let vendor = req.body;

  let vm = new vendorsManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  vm.createVendor(vendor, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* edit api */
/* editing vendor */
/* 
{
    "Id" : "12", 
    ...[To be Edited the Static Fields]
}
*/
router.put("/edit", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let vendor = req.body;

  let vm = new vendorsManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  vm.editVendor(vendor, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* get api */
/* get vendor(s) */
/* 
{
    ...[Necessary Filter Fields], [$[FieldName] for Filter Fields Operator]
}
*/
router.get("/get", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();
  let query = req.query;

  let vm = new vendorsManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  vm.getVendors(query, response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

module.exports = router;
