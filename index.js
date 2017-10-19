const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const port = 3030
const mongoose = require('mongoose')
const promise = require('bluebird')
const errorHandlers = require('./utils/errorHandlers')
const passport = require('passport')

mongoose.Promise = promise
mongoose.connect('mongodb://localhost/foodControl', {
  useMongoClient: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(expressValidator())
const userRoutes = require('./routes/userRoutes')
const listRoutes = require('./routes/listRoutes')
const officeRoutes = require('./routes/officeRoutes')
const orderRoutes = require('./routes/orderRoutes')
const loginRoute = require('./middlewares/loginRoutes')

app.use(errorHandlers.productionErrors)

app.use('/', loginRoute)
app.use('/', userRoutes)
app.use('/', officeRoutes)
app.use('/', listRoutes)
app.use('/', orderRoutes)

app.use(errorHandlers.notFound)
app.use(errorHandlers.catchErrors)

if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors)
}

app.listen(port, function () {
  console.log('app working on port:', port)
})
