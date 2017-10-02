const mongoose = require('mongoose')

const lists = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  menu: {
    type: String,
    required: true
  },
  drinks: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('List', lists)
