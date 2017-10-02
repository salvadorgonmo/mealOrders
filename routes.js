const express = require('express')
const Router = express.Router()
const { catchErrors } = require('./utils/errorHandlers')
const officeController = require('./controllers/office')
const listController = require('./controllers/list')

Router.post('/office', catchErrors(officeController.post))
Router.get('/office', catchErrors(officeController.get))
Router.put('/office/:id', catchErrors(officeController.put))
Router.delete('/office/:id', catchErrors(officeController.delete))
Router.get('/office/:id', catchErrors(officeController.getOne))

Router.post('/list', catchErrors(listController.post))
Router.get('/list', catchErrors(listController.get))
Router.put('/list/:id', catchErrors(listController.put))
Router.delete('/list/:id', catchErrors(listController.delete))
Router.get('/list/:id', catchErrors(listController.getOne))

module.exports = Router
