const validator = require('../../utils/schemaValidator')
const { paramId } = require('../../controllers/schemas/base')

const post = {
  title: {
    notEmpty: true,
    errorMessage: 'You should full the field with the title of the restaurant'
  },
  date: {
    notEmpty: true,
    isISO8601: true,
    errorMessage: 'You should put a correct date in this format: YYYY-MM-DD'
  },
  menu: {
    notEmpty: true,
    errorMessage: 'You should full the field'
  },
  drinks: {
    notEmpty: true,
    errorMessage: 'If there are no drinks in the menu, please fill with N/A'
  },
  isActive: {
    notEmpty: true,
    isBoolean: true,
    errorMessage: 'This contain only boolean values'
  }
}

const put = {
  title: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'You should enter the name of the restaurant'
  },
  date: {
    optional: {
      options: { checkFalsy: true }
    },
    isISO8601: true,
    errorMessage: 'You should put the correct date format: YYYY-MM-DD '
  },
  menu: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'Ensure you are typing the menu'
  },
  drinks: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'Error updating the drinks list'
  },
  isActive: {
    optional: {
      options: { checkFalsy: true }
    },
    isBoolean: true,
    errorMessage: 'You should type a boolean value'
  }
}

module.exports.getOne = function (req, res, next) {
  validator.param(req, res, next, paramId('list id'))
}

module.exports.delete = function (req, res, next) {
  validator.param(req, res, next, paramId('list id'))
}

module.exports.put = function (req, res, next) {
  validator.valid(req, res, next, put)
}

module.exports.post = function (req, res, next) {
  validator.valid(req, res, next, post)
}
