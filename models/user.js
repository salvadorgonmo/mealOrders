
var mongoose = require('mongoose')

const users = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  office: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Office'
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', users)
