'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gplMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000


// definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

//Configurar los resolvers
const resolvers = {
    hello: () => {
        return 'Hola Mundo'
    }
}

// //ejecutar el query hello
// graphql(schema, '{ hello }', resolvers).then((data) => {
//     console.log(data)
// })

// //ejecutar el query hello
// graphql(schema, '{ saludo }', resolvers).then((data) => {
//     console.log(data)
// })

app.use('/api', gplMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`);
})

