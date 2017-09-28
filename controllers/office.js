const OfficeModel = require('../models/office')

module.exports.get = function get (req, res) {
  OfficeModel.find({}).exec(function (err, value) {
    if (err) return res.status(500).send()
    res.json({value})
  })
}

module.exports.getOne = function getOne (req, res) {
  OfficeModel.findOne({ _id: req.params.id }, req.body)
  .exec(function (err, value) {
    if (err) return res.status(500).send()
    res.json({value})
  })
}

module.exports.post = function post (req, res) {
  const newOffice = new OfficeModel(req.body)
  newOffice.save()
    .then(function (value) {
      res.json({
        _id: value._id
      })
    }).catch(function (err) {
      return res.status(500).send(err)
    })
}

module.exports.put = function put (req, res) {
  OfficeModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function (value) {
      res.send()
    }).catch(function (err) {
      return res.status(500).send(err)
    })
}

module.exports.delete = function del (req, res) {
  OfficeModel.findOneAndUpdate({ _id: req.params.id }, {isActive: false})
  .then(function (value) {
    res.send()
  }).catch(function (err) {
    return res.status(500).send(err)
  })
}
