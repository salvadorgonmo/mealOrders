const OrderModel = require('../models/order')

module.exports.get = async function get (req, res) {
  const data = await OrderModel.find({})
  res.json({data})
}

module.exports.getOne = async function getOne (req, res) {
  const data = await OrderModel.findOne({ _id: req.params.id }, req.body)
  res.json({data})
}

module.exports.post = async function post (req, res) {
  const newOrder = new OrderModel(req.body)
  const data = await newOrder.save()
  res.json({ _id: data._id })
}

module.exports.put = async function put (req, res) {
  await OrderModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  await res.send()
}

module.exports.delete = async function del (req, res) {
  await OrderModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  await res.send()
}
