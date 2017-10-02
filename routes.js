const express = require('express')
const Router = express.Router()
const { catchErrors } = require('./utils/errorHandlers')
const officeController = require('./controllers/office')
const listController = require('./controllers/list')
const orderController = require('./controllers/order')
const userController = require('./controllers/user')

Router.post('/office', catchErrors(officeController.post))
Router.get('/office', catchErrors(officeController.get))
Router.put('/office/:id', catchErrors(officeController.put))
Router.delete('/office/:id', catchErrors(officeController.delete))
Router.get('/office/:id', catchErrors(officeController.getOne))

Router.post('/list', catchErrors(listController.post))
Router.get('/list', catchErrors(listController.get))
Router.put('/list/:id', catchErrors(listController.put))
Router.delete('/list/:id', catchErrors(listController.delete))
Router.get('/list/:id', catchErrors(listController.getOne))

Router.post('/order', catchErrors(orderController.post))
Router.get('/order', catchErrors(orderController.get))
Router.put('/order/:id', catchErrors(orderController.put))
Router.delete('/order/:id', catchErrors(orderController.delete))
Router.get('/order/:id', catchErrors(orderController.getOne))

Router.post('/user', catchErrors(userController.post))
Router.get('/user', catchErrors(userController.get))
Router.put('/user/:id', catchErrors(userController.put))
Router.delete('/user/:id', catchErrors(userController.delete))
Router.get('/user/:id', catchErrors(userController.getOne))

module.exports = Router
