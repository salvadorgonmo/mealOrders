const validator = require('../../utils/schemaValidator')
// const ObjectId = require('mongodb').ObjectID

const getOne = {
  id: {
   // isMongoId: true,
    isMongoId: true,
    notEmpty: true,
    errorMessage: 'This is not a correct MongoID'
  }
}

const post = {
  name: {
    notEmpty: true,
    errorMessage: 'The field should contain your name'
  },
  office: {
    notEmpty: true,
    errorMessage: 'The field should containt the office name'
  },
  password: {
    notEmpty: true,
    errorMessage: 'Invalid password'
  },
  email: {
    notEmpty: true,
    isEmail: true,
    errorMessage: 'Invalid email'
  },
  phone: {
    notEmpty: true,
    isNumber: false,
    errorMessage: 'The phone is in the incorrect format'
  },
  role: {
    notEmpty: true,
    errorMessage: 'You need to fullfill the field with your role'
  },
  slackUser: {
    notEmpty: true,
    errorMessage: 'You should type your slack user'
  },
  isActive: {
    isBoolean: {
      errorMessage: 'Should be a boolean'
    }
  }

}

const put = {
  name: {
    notEmpty: true,
    errorMessage: 'The field should contain your new name'
  },
  office: {
    notEmpty: true,
    errorMessage: 'The field should containt the new office name'
  },
  password: {
    notEmpty: true,
    errorMessage: 'Invalid password'
  },
  email: {
    notEmpty: true,
    isEmail: true,
    errorMessage: 'Invalid email'
  },
  phone: {
    notEmpty: true,
    isNumber: true,
    errorMessage: 'The phone is in the incorrect format'
  },
  role: {
    notEmpty: true,
    errorMessage: 'You need to fullfill the field with your role'
  },
  slackUser: {
    notEmpty: true,
    errorMessage: 'You should type your slack user'
  },
  isActive: {
    isBoolean: {
      errorMessage: 'Should be a boolean'
    }
  }
}

module.exports.post = function (req, res, next) {
  validator.valid(req, res, next, post)
}

module.exports.put = function (req, res, next) {
  validator.valid(req, res, next, put)
}

module.exports.getOne = function (req, res, next) {
  validator.param(req, res, next, getOne)
}
