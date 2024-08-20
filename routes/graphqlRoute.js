const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../graphql/schemaLoader");

const router = express.Router();

router.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = router;
