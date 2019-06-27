var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var clientViewsManager = require("../manager/clientViewsManager");

/* get dataGridColumn(s) */
/* 
{
}
*/
router.get("/getDataGridColumns", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let dgcm = new clientViewsManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  dgcm.getDataGridColumns(response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

/* get entityAreasAndFields(s) */
/* 
{
}
*/
router.get("/getEntityAreasAndFields", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let dgcm = new clientViewsManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  dgcm.getEntityAreasAndFields(response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

module.exports = router;
