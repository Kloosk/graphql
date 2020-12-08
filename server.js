const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQlSchema,
    GraphQlObjectType
} = require('graphql');

const app = express();

app.use('/graphql',graphqlHTTP({
    graphiql: true
}));

app.listen(5000,() => {
   console.log("Server is running on PORT 5000");
});