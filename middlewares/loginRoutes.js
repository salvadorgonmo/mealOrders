const express = require('express')
const Router = express.Router()
const loginController = require('../controllers/login')

Router.post('/login', loginController.login)
Router.post('/logout', loginController.logout)


module.exports = Router