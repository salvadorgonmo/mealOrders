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
const authorization = require('./middlewares/auth')

Router.post('/office', authorization.auth, officeSchema.post, catchErrors(officeController.post))
Router.get('/office', authorization.auth, catchErrors(officeController.get))
Router.put('/office/:id', authorization.auth, officeSchema.put, catchErrors(officeController.put))
Router.delete('/office/:id', authorization.auth, officeSchema.delete, catchErrors(officeController.delete))
Router.get('/office/:id', authorization.auth, officeSchema.getOne, catchErrors(officeController.getOne))

Router.post('/list', authorization.auth, listSchema.post, catchErrors(listController.post))
Router.get('/list', authorization.auth, catchErrors(listController.get))
Router.put('/list/:id', authorization.auth, listSchema.put, catchErrors(listController.put))
Router.delete('/list/:id', authorization.auth, listSchema.delete, catchErrors(listController.delete))
Router.get('/list/:id', authorization.auth, listSchema.getOne, catchErrors(listController.getOne))

Router.post('/order', authorization.auth, orderSchema.post, catchErrors(orderController.post))
Router.get('/order', authorization.auth, catchErrors(orderController.get))
Router.put('/order/:id', authorization.auth, orderSchema.put, catchErrors(orderController.put))
Router.delete('/order/:id', authorization.auth, orderSchema.delete, catchErrors(orderController.delete))
Router.get('/order/:id', authorization.auth, orderSchema.getOne, catchErrors(orderController.getOne))

Router.post('/user', authorization.auth, userSchema.post, catchErrors(userController.post))
Router.get('/user', authorization.auth, catchErrors(userController.get))
Router.put('/user/:id', authorization.auth, userSchema.put, catchErrors(userController.put))
Router.delete('/user/:id', authorization.auth, userSchema.delete, catchErrors(userController.delete))
Router.get('/user/:id', authorization.auth, userSchema.getOne, catchErrors(userController.getOne))

module.exports = Router
