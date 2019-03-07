var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var dataGridColumnsManager = require("../manager/dataGridColumnsManager");

/* get api */
/* get dataGridColumn(s) */
/* 
{
}
*/
router.get("/get", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let dgcm = new dataGridColumnsManager(
    baseObj.dbConnection,
    baseObj.site,
    baseObj.cacheService
  );

  dgcm.getDataGridColumns(response).finally(() => {
    res.send(response);
    baseObj.dbConnection.close();
  });
});

module.exports = router;
