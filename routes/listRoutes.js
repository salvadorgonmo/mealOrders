const express = require('express')
const Router = express.Router()
const { catchErrors } = require('../utils/errorHandlers')
const listController = require('../controllers/list')
const listSchema = require('../controllers/schemas/list')
const authorization = require('../middlewares/auth')

Router.post('/list', authorization.auth, listSchema.post, catchErrors(listController.post))
Router.get('/list', authorization.auth, catchErrors(listController.get))
Router.put('/list/:id', authorization.auth, listSchema.put, catchErrors(listController.put))
Router.delete('/list/:id', authorization.auth, listSchema.delete, catchErrors(listController.delete))
Router.get('/list/:id', authorization.auth, listSchema.getOne, catchErrors(listController.getOne))

module.exports = Router
