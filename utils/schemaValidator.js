module.exports.valid = function (req, res, next, schema) {
  req.checkBody(schema)
  validateErrors(req, res, next)
}

module.exports.param = function (req, res, next, schema) {
  req.checkParams(schema)
  validateErrors(req, res, next)
}

function validateErrors (req, res, next) {
  const errors = req.validationErrors()
  if (errors) return res.status(400).send(errors)
  next()
}
