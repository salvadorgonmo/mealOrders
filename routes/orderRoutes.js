const express = require('express')
const Router = express.Router()
const { catchErrors } = require('../utils/errorHandlers')
const orderController = require('../controllers/order')
const orderSchema = require('../controllers/schemas/order')
const authorization = require('../middlewares/auth')

Router.post('/order', authorization.auth, orderSchema.post, catchErrors(orderController.post))
Router.get('/order', authorization.auth, catchErrors(orderController.get))
Router.put('/order/:id', authorization.auth, orderSchema.put, catchErrors(orderController.put))
Router.delete('/order/:id', authorization.auth, orderSchema.delete, catchErrors(orderController.delete))
Router.get('/order/:id', authorization.auth, orderSchema.getOne, catchErrors(orderController.getOne))

module.exports = Router
