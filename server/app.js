const express = require("express");
const path = require("path");
const app = express();
const jwt = require("./src/services/jwt");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const auth = require("./src/endpoints/auth");
const verify = require("./src/services/verifyUser");

// Express Initialization
app.use(express.static(path.join(__dirname, "routes")));
app.use(cors());
app.use(express.urlencoded());

// GraphQL Initialization
var schema = buildSchema(`
  type Query {
    hello: String
  } `);
var root = { hello: () => "Hello world!" };
app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

// Routes
app.get("/", function (req, res) {
  res.send("Home");
});

app.post("/auth", function (req, res) {
  // TODO:
  // Check on database if there is a record.
  // If none, return a 404 error.

  res.send(auth(req));
});

app.post("/login", function (req, res) {
  res.send(jwt(req.body));
});

// Run the server.
app.listen(process.env.PORT || 9000);
