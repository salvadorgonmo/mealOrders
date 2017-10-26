const express = require('express')
const Router = express.Router()
const { catchErrors } = require('../utils/errorHandlers')
const allSeeds = require('../seeds/allSeeds')

Router.post('/faker/user', catchErrors(allSeeds.insertUserData))
Router.post('/faker/order', catchErrors(allSeeds.insertOrderData))
Router.post('/faker/office', catchErrors(allSeeds.insertOfficeData))
Router.post('/faker/menuLlist', catchErrors(allSeeds.insertMenuListData))

module.exports = Router
