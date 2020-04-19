//Generate Token using secret from process.env.JWT_SECRET
var jwt = require("jsonwebtoken");

function generateToken(user) {
  var u = {
    name: user.name,
    username: user.username,
    //    _id: user._id.toString(),
    //    image: user.image
  };
  return (token = jwt.sign(u, "secret!", {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  }));
}

module.exports = generateToken;
