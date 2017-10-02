const UserModel = require('../models/user')

module.exports.get = async function get (req, res) {
  const data = await UserModel.find({})
  res.json({data})
}

module.exports.getOne = async function getOne (req, res) {
  const data = await UserModel.findOne({ _id: req.params.id }, req.body)
  res.json({data})
}

module.exports.post = async function post (req, res) {
  const newUser = new UserModel(req.body)
  const data = await newUser.save()
  res.json({ _id: data._id })
}

module.exports.put = async function put (req, res) {
  await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  await res.send()
}

module.exports.delete = async function del (req, res) {
  await UserModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  await res.send()
}
