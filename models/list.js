var mongoose = require('mongoose')

const lists = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  menu: {
    type: String,
    require: true
  },
  drinks: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('List', lists)
