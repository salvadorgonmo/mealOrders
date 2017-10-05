const validator = require('../../utils/schemaValidator')
const searchId = require('../../controllers/schemas/base')

const post = {
  name: {
    notEmpty: true,
    errorMessage: 'The field should contain the name of the company'
  },
  address: {
    notEmpty: true,
    errorMessage: 'The field should contain the address of the office'
  },
  isActive: {
    notEmpty: true,
    isBoolean: {
      errorMessage: 'Should be a boolean'
    }
  }
}

const put = {
  name: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'The field should contain the name of the company'
  },
  address: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'The field should contain the new office address'
  },
  isActive: {
    optional: {
      options: {checkFalsy: true}
    },
    isBoolean: true,
    errorMessage: 'Only true and false values'
  }
}

module.exports.post = function (req, res, next) {
  validator.valid(req, res, next, post)
}

module.exports.put = function (req, res, next) {
  validator.valid(req, res, next, put)
}

module.exports.getOne = function (req, res, next) {
  validator.param(req, res, next, searchId.idSearch)
}

module.exports.delete = function (req, res, next) {
  validator.param(req, res, next, searchId.idSearch)
}
