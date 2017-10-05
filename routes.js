const express = require('express')
const Router = express.Router()
const { catchErrors } = require('./utils/errorHandlers')
const officeController = require('./controllers/office')
const listController = require('./controllers/list')
const orderController = require('./controllers/order')
const userController = require('./controllers/user')
const userSchema = require('./controllers/schemas/user')
const listSchema = require('./controllers/schemas/list')
const officeSchema = require('./controllers/schemas/office')
const orderSchema = require('./controllers/schemas/order')

// Alernative routes

Router.post('/office', officeSchema.post, catchErrors(officeController.post))
Router.get('/office', catchErrors(officeController.get))
Router.put('/office/:id', officeSchema.put, catchErrors(officeController.put))
Router.delete('/office/:id', catchErrors(officeController.delete))
Router.get('/office/:id', officeSchema.getOne, catchErrors(officeController.getOne))

Router.post('/list', listSchema.post, catchErrors(listController.post))
Router.get('/list', catchErrors(listController.get))
Router.put('/list/:id', listSchema.put, catchErrors(listController.put))
Router.delete('/list/:id', catchErrors(listController.delete))
Router.get('/list/:id', listSchema.getOne, catchErrors(listController.getOne))

Router.post('/order', orderSchema.post, catchErrors(orderController.post))
Router.get('/order', catchErrors(orderController.get))
Router.put('/order/:id', orderSchema.put, catchErrors(orderController.put))
Router.delete('/order/:id', catchErrors(orderController.delete))
Router.get('/order/:id', orderSchema.getOne, catchErrors(orderController.getOne))

Router.post('/user', userSchema.post, catchErrors(userController.post))
Router.get('/user', catchErrors(userController.get))
Router.put('/user/:id', userSchema.put, catchErrors(userController.put))
Router.delete('/user/:id', catchErrors(userController.delete))
Router.get('/user/:id', userSchema.getOne, catchErrors(userController.getOne))

module.exports = Router
