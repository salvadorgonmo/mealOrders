const ModelUser = require('../models/user')
const Guid = require('guid')

module.exports.login = async function login (req, res) {
  try {
    const { email, password } = req.body
    const User = await ModelUser.findOne({email: email})
    if (User.email === email && User.password === password) {
      const token = await Guid.create()
      User.token = token
      await User.save()
      res.json({Authorization: token})
    } else {
      throw new Error('Please enter a valid credentials')
    }
  } catch (err) {
    res.status(401).send('Your password or email are not correct: ')
  }
}

module.exports.logout = async (req, res) => {
  const tokenUser = req.get('Authorization')
  await ModelUser.findOneAndUpdate({token: tokenUser}, {token: null})
  res.status(200).send('Logout successful')
}
