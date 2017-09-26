let express = require('express')
let Router = express.Router()

const todoController = require('./controllers/todo')
Router.get('/todo', todoController.get)
Router.post('/todo', todoController.post)
Router.put('/todo/:id', todoController.put)
Router.get('/todo/:id', todoController.getOne)

module.exports = Router
