module.exports.valid = function (req, res, next, schema) {
  req.checkBody(schema)
  const errors = req.validationErrors()
  if (errors) {
    res.status(500).send(errors)
    return
  }
  next()
}

module.exports.param = function (req, res, next, schema) {
  req.checkParams(schema)
  const errors = req.validationErrors()
  if (errors) {
    res.status(500).send(errors)
    return
  }
  next()
}
