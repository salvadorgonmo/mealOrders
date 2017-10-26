const express = require('express')
const Router = express.Router()
const { catchErrors } = require('../utils/errorHandlers')
const menuListController = require('../controllers/menuList')
const menuListSchema = require('../controllers/schemas/menuList')
const authorization = require('../middlewares/auth')

Router.post('/menuList', authorization.auth, menuListSchema.post, catchErrors(menuListController.post))
Router.get('/menuList', authorization.auth, catchErrors(menuListController.get))
Router.put('/menuList/:id', authorization.auth, menuListSchema.put, catchErrors(menuListController.put))
Router.delete('/menuList/:id', authorization.auth, menuListSchema.delete, catchErrors(menuListController.delete))
Router.get('/menuList/:id', authorization.auth, menuListSchema.getOne, catchErrors(menuListController.getOne))

module.exports = Router
