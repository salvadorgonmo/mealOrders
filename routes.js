let express = require('express')
let Router = express.Router()

// const listController = require('./controllers/list')
const officeController = require('./controllers/office')
// Router.get('/list', listController.get)
Router.post('/office', officeController.post)
Router.get('/office', officeController.get)
Router.put('/office/:id', officeController.put)
Router.delete('/office/:id', officeController.delete)
Router.get('/office/:id', officeController.get1)
// const todoController = require('./controllers/todo')
// Router.get('/todo', todoController.get)
// Router.post('/todo', todoController.post)
// Router.put('/todo/:id', todoController.put)
// Router.get('/todo/:id', todoController.getOne)

module.exports = Router
