var express = require("express");
var router = express.Router();

var base = require("./base");
var authManager = require("../manager/authManager");

/* login api */
/* For user authentication when they try to log in */
/* 
{ 
  "Email": "mail@mail.com",
  "Password": "@password",
}
*/
router.post("/login", function(req, res, next) {
  let logInViewModel = req.body;

  if (logInViewModel !== null && logInViewModel.Email !== null) {
    let baseObj = new base();
    dbConnection = baseObj.dbConnection;

    let am = new authManager(dbConnection);

    am.login(logInViewModel, res)
      .catch(error => {
        next(error);
      })
      .finally(() => {
        ///res.send(response);
        dbConnection.close();
      });
  } else {
    next("Invalid login data format!!!");
  }
});

module.exports = router;
