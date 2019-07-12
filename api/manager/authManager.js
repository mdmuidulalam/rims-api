const Promise = require("bluebird");

const baseManager = require("./baseManager");
const usersData = require("../dal/usersData");
const bcrypt = require("bcrypt");
const config = require("../config");
const jwt = require("../utilities/auth");
var responseViewModel = require("../utilities/responseViewModel");

class authManager extends baseManager {
  constructor(dbConnection) {
    super(dbConnection);
    this.uData = new usersData(this.dbConnection);
  }

  /* login api manager */
  login(logInViewModel, res) {
    return this.uData
      .getUserByEmail(logInViewModel.Email.trim())
      .then(dbUser => {
        return new Promise((resolve, reject) => {
          if (dbUser.length == 0) {
            res.status(260);
            resolve();
          } else {
            bcrypt.compare(
              logInViewModel.Password,
              dbUser[0].PasswordHash,
              (err, bRes) => {
                if (err || !bRes) {
                  res.status(261);
                }
                if (bRes) {
                  res.status(200);
                  let auth = new jwt();
                  res.cookie('jwtToken', auth.createJWToken(dbUser), { maxAge: config.jwt.maxAge, httpOnly: true});
                }
                resolve();
              }
            );
          }
        });
      })
      .then(() => res.send());
  }
}

module.exports = authManager;
