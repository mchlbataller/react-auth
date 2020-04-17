function auth(req) {
    // TODO: Validate the query then return a bool if successful.
    let query = req.query;
    let username = query.username;
    let password = query.password;

    let authenticateUser = (username === "Michael" && password === "0320") ? "true" : "false";

    let authResponse = {"auth": authenticateUser};

    console.log(authenticateUser);

    return authResponse;
}

module.exports = auth;