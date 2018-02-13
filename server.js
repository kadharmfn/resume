const express = require('express')
const graphQLHTTP = require('express-graphql')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')
const schema = require('./data/schema')

const APP_PORT = 8080;
const GRAPHQL_PORT = 4000;

const graphQLServer = express()
graphQLServer.use('/', graphQLHTTP({schema, graphiql: true}))
graphQLServer.listen(GRAPHQL_PORT, () => {
    console.log('GraphQL server is running on port', GRAPHQL_PORT)
})

const compiler = webpack(config)

const app = new WebpackDevServer(compiler, 
    {
        ...config.devServer,
        proxy: {'/graphql': `http://localhost:${GRAPHQL_PORT}`},
    }
)

app.listen(APP_PORT, () => {
    console.log('App server is running on port', APP_PORT)
})

