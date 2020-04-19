exports.record = [
  {
    id: 1,
    username: "mikaeruu",
    password: "passwordtest",
    admin: true,
  },
  {
    id: 2,
    username: "guest",
    password: "none",
    admin: false,
  },
];

exports.dbLookup = function (user, pass) {
  // Iterate through all records
  for (var i = 0; i < record.length - 1; i++) {
    if (record[i].username === user && record[i].password === pass) {
      return true;
    }
  }

  return false;
};
