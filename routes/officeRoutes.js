const express = require('express')
const Router = express.Router()
const { catchErrors } = require('../utils/errorHandlers')
const officeController = require('../controllers/office')
const officeSchema = require('../controllers/schemas/office')
const authorization = require('../middlewares/auth')

Router.post('/office', officeSchema.post, catchErrors(officeController.post))
Router.get('/office', authorization.auth, catchErrors(officeController.get))
Router.put('/office/:id', authorization.auth, officeSchema.put, catchErrors(officeController.put))
Router.delete('/office/:id', authorization.auth, officeSchema.delete, catchErrors(officeController.delete))
Router.get('/office/:id', authorization.auth, officeSchema.getOne, catchErrors(officeController.getOne))

module.exports = Router
