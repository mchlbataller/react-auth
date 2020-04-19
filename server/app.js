const express = require('express');
const path = require('path');
const app = express();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const cors = require('cors');

const auth = require('./src/endpoints/auth');

app.use(express.static(path.join(__dirname, 'routes')));
app.use(cors());

var schema = buildSchema(` type Query { hello: String } `);
var root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({ schema: schema, rootValue: root, graphiql: true, }));

app.get('/', function(req, res) { res.send("Home"); }) 

app.get('/auth', function(req, res) {
    res.send(auth(req));
})

app.listen(process.env.PORT || 9000)