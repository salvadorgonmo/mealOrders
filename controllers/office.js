const OfficeModel = require('../models/office')

module.exports.get = function get (req, res) {
  OfficeModel.find({}).exec(function (err, offices) {
    if (err) return res.status(500).send()
    res.json({offices})
  })
}

module.exports.get1 = function get (req, res) {
  OfficeModel.findOne({ _id: req.params.id }, req.body)
  .exec(function (err, data) {
    if (err) return res.status(500).send(err)
    res.json({data})
  })
}
  

module.exports.post = function post (req, res) {
  const newOffice = new OfficeModel(req.body)
  newOffice.save(function (err, list) {
    if (err) return res.status(500).send(err)
    res.json({
      _id: list._id
    })
  })
}

module.exports.put = function put (req, res) {
  OfficeModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    .exec(function (err, data) {
      if (err) return res.status(500).send()
      res.send()
    })
}


module.exports.delete = function del (req, res) {
  OfficeModel.findOneAndRemove({ _id: req.params.id} ,req.body)
  .exec(function (err, data){
    if (err) return res.status(404).send(err)
    res.send()
  })
}