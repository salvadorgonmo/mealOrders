const mongoose = require('mongoose')

const orders = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  tip: {
    type: mongoose.Schema.Types.Decimal,
    required: true
  },
  total: {
    type: mongoose.Schema.Types.Decimal,
    required: true
  }
})

module.exports = mongoose.model('Order', orders)
