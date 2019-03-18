const Promise = require("bluebird");

const baseManager = require("./baseManager");
const usersData = require("../dal/usersData");
const bcrypt = require("bcrypt");
const config = require("../config");

class accountsManager extends baseManager {
  constructor(dbConnection) {
    super(dbConnection);
    this.uData = new usersData(this.dbConnection);
  }

  /* signup api manager */
  signup(signUpViewModel, response) {
    return this.uData
      .getUserByEmail(signUpViewModel.Email)
      .then(dbUser => {
        if (dbUser.length == 0) {
          return new Promise((resolve, reject) => {
            bcrypt.hash(
              signUpViewModel.Password,
              config.password.salt,
              (err, hash) => {
                if (err) {
                  reject(err);
                } else {
                  resolve({
                    name: signUpViewModel.Name,
                    email: signUpViewModel.Email,
                    passwordHash: hash,
                    userId: signUpViewModel.Email.replace(
                      "@",
                      "."
                    ).toLowerCase()
                  });
                }
              }
            );
          });
        } else {
          throw "DuplicateEmail";
        }
      })
      .then(user => {
        return this.uData.insertUser(user).then(() => {
          response.success = true;
        });
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push("Internal Server Error");
        throw error;
      });
  }
}

module.exports = accountsManager;
