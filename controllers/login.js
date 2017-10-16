const ModelUser = require('../models/user')
const Guid = require('guid')

module.exports.login = async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const User = await ModelUser.findOne({email: email})
    if (User.email === email && User.password === password) {
      const token = await Guid.create()
      User.token = token
      await User.save()
      res.json({Authorization: token})
    } else {
      throw new Error()
    }
  } catch (err) {
    res.status(401).send('Your password or email are not correct: ')
  }
}

module.exports.logout = async (req, res) => {
  const tokenUser = req.get('Authorization')
  await ModelUser.findOneAndUpdate({ token: tokenUser}, {token: null})
  res.status(200).send('Logout successful')
}
