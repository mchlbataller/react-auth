const express = require("express");
const path = require("path");
const app = express();
const generateToken = require("./src/services/jwtGenerate");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const auth = require("./src/endpoints/auth");
const verify = require("./src/services/verifyUser");
const verifyToken = require("./src/services/jwtVerify");

// Express Initialization
app.use(express.static(path.join(__dirname, "routes")));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

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
  // If the user is verified, generate a new token.
  if (verify(req.body)) {
    console.log('NOICE: ' + process.env.JWT_KEY);
    var token = generateToken(req.body);
    res.json({
      user: req.body.username,
      token: token,
    });
  } else {
    console.log(
      "wrong user/pass" + req.body["username"] + ", " + req.body["password"]
    );
    res.sendStatus(404);
  }
});

// Route for re-authentication
app.post("/reauth", function (req, res) {
  console.log(req.body);
  console.log("Verified JWT: " + verifyToken(req));
  if (verifyToken(req) != undefined) res.send(JSON.stringify({ reauth: true }));
  else res.send(JSON.stringify({ reauth: false }));
});

// Run the server.
app.listen(process.env.PORT || 9000);
