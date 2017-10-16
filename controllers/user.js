const UserModel = require('../models/user')

module.exports.get = async function get (req, res) {
  const data = await UserModel.find({}).populate('office')
  if(res.locals.role === 'admin') res.json({data})
  else res.status(401).send('You do not have enough privileges for see this')
}

module.exports.getOne = async function getOne (req, res) {
  const data = await UserModel.findById(req.params.id).populate('office')
  if (!data) return res.status(200).send('This user is not stored in the server')
  res.json({data})
}

module.exports.post = async function post (req, res) {
  const newUser = new UserModel(req.body)
  const data = await newUser.save()
  res.json({ _id: data._id })
}

module.exports.put = async function put (req, res) {
  await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  res.send('User modified: '+res.locals.name)
}

module.exports.delete = async function del (req, res) {
  await UserModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  res.send('User deleted: '+res.locals.name)
}
