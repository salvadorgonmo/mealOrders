const modelUser = require('../models/user')

module.exports.auth = async (req, res, next) => {
  try {
    const tokenUno = req.app.locals.token
    const Exist = await modelUser.findOne({ token: tokenUno })
    if (Exist.token != null) {
      next()
    } else {
      throw new Error()
    }
  } catch (err) {
    res.status(401).send('You must need to log in first')
  }
}
