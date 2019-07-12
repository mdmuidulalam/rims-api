var config = require("../config");
var jwtConfig = require("../utilities/auth");

class jwtMW {
  constructor() {}

  verifyJWT_MW(req, res, next) {
    let token = req.cookies.jwtToken;
    if (token === undefined || token === "") {
      res.status(401).json({ message: "Authentication failed!" });
      return;
    }

    new jwtConfig()
      .verifyJWTToken(token)
      .then(decodedToken => {
        req.user = decodedToken.data;
        next();
      })
      .catch(err => {
        res.status(400).json({ message: "Authentication failed!" });
      });
  }
}

module.exports = jwtMW;
