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
app.use(errorHandlers.productionErrors)
app.use('/', routes)
app.use(errorHandlers.notFound)
app.use(errorHandlers.catchErrors)

if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors)
}

app.listen(port, function () {
  console.log('app working on port:', port)
})
