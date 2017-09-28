const express = require('express')
const Router = express.Router()

const officeController = require('./controllers/office')
Router.post('/office', officeController.post)
Router.get('/office', officeController.get)
Router.put('/office/:id', officeController.put)
Router.delete('/office/:id', officeController.delete)
Router.get('/office/:id', officeController.getOne)

module.exports = Router
