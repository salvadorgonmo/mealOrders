const OfficeModel = require('../models/office')

module.exports.get = async function get (req, res) {
  const data = await OfficeModel.find({})
  res.json({data})
}

module.exports.getOne = async function getOne (req, res) {
  const data = await OfficeModel.findOne({ _id: req.params.id })
  res.json({data})
}

module.exports.post = async function post (req, res) {
  const newOffice = new OfficeModel(req.body)
  const data = await newOffice.save()
  res.json({ _id: data._id })
}

module.exports.put = async function put (req, res) {
  await OfficeModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  res.send()
}

module.exports.delete = async function del (req, res) {
  await OfficeModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  res.send()
}
