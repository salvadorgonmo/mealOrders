const modelUser = require('../models/user')

module.exports.auth = async (req, res, next) => {
  try {
    const tokenUser = req.get('Authorization')
    const User = await modelUser.findOne({ token: tokenUser })
    if (User.token != null) {
      res.locals.email = User.email
      res.locals.name = User.name
      res.locals.role = User.role
      res.locals.id = User._id
      next()
    } else throw new Error()
  } catch (err) {
    res.status(401).send('You must need to log in first')
  }
}
