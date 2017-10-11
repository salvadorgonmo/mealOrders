const modelUser = require ('../models/user')

module.exports.token = async (req, res ) => {
  const token = req.get('Authorization')
  console.log(token)
}