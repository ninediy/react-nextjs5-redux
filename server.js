// server.js
const next = require('next')
const routes = require('./routes')
const app = next({
    dev: process.env.NODE_ENV !== 'production'
})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app
    .prepare()
    .then(() => {
        console.log('GARENA SERVER LIVE ON PORT : 3000');
        express()
            .use(handler)
            .listen(3000)
    })