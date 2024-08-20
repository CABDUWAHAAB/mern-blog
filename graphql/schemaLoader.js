const fs = require("fs");
const path = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { resolvers } = require("./resolvers");

// Load the .graphql schema file
const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

// Create an executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
