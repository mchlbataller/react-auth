const db = require("../db");
const record = db.users.record;

verifyUser = function (data) {
  // Iterate through all records
  for (var i = 0; i < record.length; i++) {
    if (
      record[i].username === data.username &&
      record[i].password === data.password
    ) {
      return true;
    }
  }

  return false;
};

module.exports = verifyUser;
