const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User{
        name : String!
    }
`)