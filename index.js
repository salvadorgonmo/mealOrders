const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3030
const mongoose = require('mongoose')
const promise = require('bluebird')
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
