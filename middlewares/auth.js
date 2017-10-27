const modelUser = require('../models/user')

module.exports.auth = async (req, res, next) => {
  try {
    const tokenUser = req.get('Authorization')
    const user = await modelUser.findOne({ token: tokenUser })
    if (user.token != null) {
      res.locals.email = user.email
      res.locals.name = user.name
      res.locals.role = user.role
      res.locals.id = user._id
      next()
    } else { throw new Error() }
  } catch (err) {
    res.status(401).send()
  }
}
