function auth(req) {
  let query = req.query;
  let username = query.username;
  let password = query.password;

  let authenticateUser =
    username === "Michael" && password === "0320" ? "true" : "false";

  let authResponse = { auth: authenticateUser };

  return authResponse;
}

module.exports = auth;
