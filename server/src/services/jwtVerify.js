var jwt = require("jsonwebtoken");

// Verifies the JSON Web Token with jwt.verify.
function verifyJWT(req) {
  return jwt.verify(req.body["token"], "process.env.JWT_KEY", function (err, decoded) {
    if (err) return undefined;
    else return decoded;
  });
}

module.exports = verifyJWT;
