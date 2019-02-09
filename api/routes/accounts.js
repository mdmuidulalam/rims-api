var express = require('express');
var router = express.Router();
var isValidDate = require('is-valid-date');

var responseViewModel = require('../utilities/responseViewModel');
var base = require('./base');
var accountsManager = require('../manager/accountsManager')

/* signup api */
/* registering new user */
/* 
{ 
  "Name": "Sample Name",
  "Email": "mail@mail.com",
  "Password": "@password",
}
*/
router.post('/signup', function(req, res) {
  let response = new responseViewModel();
  let signUpViewModel = req.body;

  if(signUpViewModel['Name'] === null
    || signUpViewModel['Name'].trim().length === 0
    || signUpViewModel['Email'] === null
    || signUpViewModel['Password'] === null) {
    response.success = false;
    res.send(response);
    return;
  }

  let baseObj = new base();
  dbConnection = baseObj.dbConnection;
      
  let am = new accountsManager(dbConnection);

  am.signup(signUpViewModel, response).finally(() => {
    res.send(response);
    dbConnection.close();
  });
});

module.exports = router;
