const express = require('express')
const Router = express.Router()
const { catchErrors } = require('./utils/errorHandlers')
const officeController = require('./controllers/office')

Router.post('/office', catchErrors(officeController.post))
Router.get('/office', catchErrors(officeController.get))
Router.put('/office/:id', catchErrors(officeController.put))
Router.delete('/office/:id', catchErrors(officeController.delete))
Router.get('/office/:id', catchErrors(officeController.getOne))

module.exports = Router
