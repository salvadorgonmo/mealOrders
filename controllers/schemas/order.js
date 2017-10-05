const validator = require('../../utils/schemaValidator')
const searchId = require('../../controllers/schemas/base')

const post = {
  description: {
    notEmpty: true,
    errorMessage: 'You should full the field with the name of the food that you want'
  },
  isActive: {
    notEmpty: true,
    isBoolean: true,
    errorMessage: 'This contain only boolean values'
  },
  user: {
    notEmpty: true,
    errorMessage: 'Introduce the user'
  },
  date: {
    notEmpty: true,
    isISO8601: true,
    errorMessage: 'You should put the correct date format: YYYY-MM-DD '
  },
  tip: {
    notEmpty: true,
    isDecimal: true,
    errorMessage: 'You should introduce a decimal number'
  },
  total: {
    notEmpty: true,
    isDecimal: true,
    errorMessage: 'You should introduce a decimal number'
  }
}

const put = {
  description: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'You should enter the name of the food'
  },
  isActive: {
    optional: {
      options: { checkFalsy: true }
    },
    isBoolean: true,
    errorMessage: 'You should type a boolean value'
  },
  user: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'Incorrect user'
  },
  date: {
    optional: {
      options: { checkFalsy: true }
    },
    isISO8601: true,
    errorMessage: 'You should put the correct date format: YYYY-MM-DD '
  },
  tip: {
    optional: {
      options: { checkFalsy: true }
    },
    isDecimal: true,
    errorMessage: 'You should introduce a decimal number'
  },
  total: {
    optional: {
      options: { checkFalsy: true }
    },
    isDecimal: true,
    errorMessage: 'You should introduce a decimal number'
  }
}

module.exports.getOne = function (req, res, next) {
  validator.param(req, res, next, searchId.idSearch)
}

module.exports.delete = function (req, res, next) {
  validator.param(req, res, next, searchId.idSearch)
}

module.exports.put = function (req, res, next) {
  validator.valid(req, res, next, put)
}

module.exports.post = function (req, res, next) {
  validator.valid(req, res, next, post)
}
