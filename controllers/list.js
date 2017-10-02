const ListModel = require('../models/list')

module.exports.getOne = async function (req, res) {
  const data = await ListModel.findOne({ _id: req.params.id }, req.body)
  res.json({data})
}

module.exports.get = async function (req, res) {
  const data = await ListModel.find({})
  res.json({data})
}

module.exports.post = async function post (req, res) {
  const newList = new ListModel(req.body)
  const data = await newList.save()
  res.json({ _id: data._id })
}

module.exports.put = async function put (req, res) {
  await ListModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  await res.send()
}

module.exports.delete = async function del (req, res) {
  await ListModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  await res.send()
}
