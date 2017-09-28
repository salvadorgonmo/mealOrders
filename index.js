const express = require('express')
let app = express()
const bodyParser = require('body-parser')
const port = 3030
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/foodControl')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routes')

app.use('/', routes)

app.listen(port, function () {
  console.log('app working on port:', port)
})
