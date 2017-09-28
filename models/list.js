const mongoose = require('mongoose')

const lists = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  menu: {
    type: String,
    required: true
  },
  drinks: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('List', lists)
