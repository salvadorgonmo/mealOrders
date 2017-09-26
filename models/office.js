var mongoose = require('mongoose')

const offices = mongoose.Schema({
  name: {
    tyoe: String,
    require: true
  },
  address: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Office', offices)
