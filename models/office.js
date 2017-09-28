const mongoose = require('mongoose')

const offices = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Office', offices)
