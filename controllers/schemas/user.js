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
    isAlpha: true,
    notEmpty: true,
    errorMessage: 'The field should contain your name with only letters'
  },
  office: {
    notEmpty: true,
    errorMessage: 'The field should contain the office name'
  },
  password: {
    isAlphanumeric: true,
    notEmpty: true,
    errorMessage: 'Invalid password format, please use only letters and numbers'
  },
  email: {
    notEmpty: true,
    isEmail: true,
    errorMessage: 'Invalid email'
  },
  phone: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'The phone is in the incorrect format'
  },
  role: {
    notEmpty: true,
    isAlpha: true,
    errorMessage: 'You need to fullfill the field with your role'
  },
  slackUser: {
    isEmail: true,
    notEmpty: true,
    errorMessage: 'You should type your slack user'
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
    isAlpha: true,
    errorMessage: 'The field should contain your new full name only with letters'
  },
  office: {
    optional: {
      options: { checkFalsy: true }
    },
    errorMessage: 'The field should containt the new office name only by letters'
  },
  password: {
    optional: {
      options: { checkFalsy: true }
    },
    isAlphanumeric: true,
    errorMessage: 'You should type your password with only numbers and letters'
  },
  email: {
    optional: {
      options: { checkFalsy: true }
    },
    isEmail: true,
    errorMessage: 'Invalid email format'
  },
  phone: {
    optional: {
      options: { checkFalsy: true }
    },
    isNumeric: true,
    errorMessage: 'The phone is in the incorrect format'
  },
  role: {
    optional: {
      options: { checkFalsy: true }
    },
    isAlpha: true,
    errorMessage: 'You need to fullfill the field with your role, and only letters'
  },
  slackUser: {
    optional: {
      options: {checkFalsy: true}
    },
    isEmail: true,
    errorMessage: 'You should type your slack user in the correct format'
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
  validator.param(req, res, next, getOne)
}
