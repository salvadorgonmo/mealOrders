const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3030
const mongoose = require('mongoose')
const promise = require('bluebird')
const errorHandlers = require('./utils/errorHandlers')
mongoose.Promise = promise
mongoose.connect('mongodb://localhost/foodControl', {
  useMongoClient: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routes')

app.use('/', routes)

app.listen(port, function () {
  console.log('app working on port:', port)
})

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)
app.use(errorHandlers.catchErrors)
// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)
