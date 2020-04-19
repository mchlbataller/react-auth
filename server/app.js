const express = require("express");
const path = require("path");
const app = express();
const db = require("./db");
const Strategy = require("passport-local");

const jwt = require("./src/services/jwt");

const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

// Use Passport
const passport = require("passport");

// Local strategy by Passport
passport.use(
  new Strategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) return cb(err);
      if (!user) return cb(null, false);
      if (user.password != password) return cb(null, false);
      return cb(null, user);
    });
  })
);

const cors = require("cors");

const auth = require("./src/endpoints/auth");

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "routes")));
app.use(cors());

// Required to use since the server must handle POST requests.
app.use(express.urlencoded());

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
var root = { hello: () => "Hello world!" };

app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.get("/", function (req, res) {
  res.send("Home");
});

app.post("/auth", function (req, res) {
  res.send(auth(req));
});

// ===========================
//  Route for the Login service endpoint.
//
app.post("/login", function (req, res) {
  console.log("nice");
  res.send(jwt(req.body));
});

app.listen(process.env.PORT || 9000);
