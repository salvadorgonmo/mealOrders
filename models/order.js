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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
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
