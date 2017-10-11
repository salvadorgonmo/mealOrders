const express = require('express')
const Router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { catchErrors } = require('./utils/errorHandlers')
const officeController = require('./controllers/office')
const listController = require('./controllers/list')
const orderController = require('./controllers/order')
const userController = require('./controllers/user')
const userSchema = require('./controllers/schemas/user')
const listSchema = require('./controllers/schemas/list')
const officeSchema = require('./controllers/schemas/office')
const orderSchema = require('./controllers/schemas/order')
const loginController = require('./controllers/login')
const tokenController = require('./middlewares/auth')

// Alernative routes

Router.post('/office', officeSchema.post, catchErrors(officeController.post))
Router.get('/office', catchErrors(officeController.get))
Router.put('/office/:id', officeSchema.put, catchErrors(officeController.put))
Router.delete('/office/:id', officeSchema.delete, catchErrors(officeController.delete))
Router.get('/office/:id', officeSchema.getOne, catchErrors(officeController.getOne))

Router.post('/list', listSchema.post, catchErrors(listController.post))
Router.get('/list', catchErrors(listController.get))
Router.put('/list/:id', listSchema.put, catchErrors(listController.put))
Router.delete('/list/:id', listSchema.delete, catchErrors(listController.delete))
Router.get('/list/:id', listSchema.getOne, catchErrors(listController.getOne))

Router.post('/order', orderSchema.post, catchErrors(orderController.post))
Router.get('/order', catchErrors(orderController.get))
Router.put('/order/:id', orderSchema.put, catchErrors(orderController.put))
Router.delete('/order/:id', orderSchema.delete, catchErrors(orderController.delete))
Router.get('/order/:id', orderSchema.getOne, catchErrors(orderController.getOne))

Router.post('/user', userSchema.post, catchErrors(userController.post))
Router.get('/user', catchErrors(userController.get))
Router.put('/user/:id', userSchema.put, catchErrors(userController.put))
Router.delete('/user/:id', userSchema.delete, catchErrors(userController.delete))
Router.get('/user/:id', userSchema.getOne, catchErrors(userController.getOne))

//Router.post('/login', (req, res) => passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', })(req, res))
Router.post('/login', loginController.login)
Router.post('/logout', catchErrors(loginController.logout))

Router.get('/token', tokenController.token)
module.exports = Router
