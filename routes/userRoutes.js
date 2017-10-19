const express = require('express')
const Router = express.Router()
const { catchErrors } = require('../utils/errorHandlers')
const userController = require('../controllers/user')
const userSchema = require('../controllers/schemas/user')
const authorization = require('../middlewares/auth')

Router.post('/user', userSchema.post, catchErrors(userController.post))
Router.get('/user', authorization.auth, catchErrors(userController.get))
Router.put('/user/:id', authorization.auth, userSchema.put, catchErrors(userController.put))
Router.delete('/user/:id', authorization.auth, userSchema.delete, catchErrors(userController.delete))
Router.get('/user/:id', authorization.auth, userSchema.getOne, catchErrors(userController.getOne))

module.exports = Router
