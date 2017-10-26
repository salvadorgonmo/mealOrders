const MenuListModel = require('../models/menuList')

module.exports.getOne = async function (req, res) {
  const data = await MenuListModel.findOne({ _id: req.params.id })
  res.json({data})
}

module.exports.get = async function (req, res) {
  const data = await MenuListModel.find({})
  res.json({data})
}

module.exports.post = async function post (req, res) {
  const newList = new MenuListModel(req.body)
  const data = await newList.save()
  res.json({ _id: data._id })
}

module.exports.put = async function put (req, res) {
  await MenuListModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  res.send()
}

module.exports.delete = async function del (req, res) {
  await MenuListModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  res.send()
}
