const ModelUser = require('../models/user')

module.exports.login = async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const User = await ModelUser.findOne({email: email})
    if (User.email === email && User.password === password) {
      const token = req.get('Authorization')
      User.token = token
      await User.save()
      req.app.locals.token = token
      req.headers.authorization = token.toString()
      res.status(200).send(token)
    } else {
      throw new Error()
    }
  } catch (err) {
    res.status(401).send('Your password or email are not correct: ')
  }
}

module.exports.logout = async (req, res) => {
  await ModelUser.findOneAndUpdate({ token: req.app.locals.token }, {token: null})
  res.status(200).send('Logout successful')
}
