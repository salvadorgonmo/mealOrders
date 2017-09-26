const TodoModel = require('../models/todo')

module.exports.get = function get (req, res) {
  TodoModel.find({}).exec(function (err, todos) {
    if (err) return res.status(500).send()
    res.json({todos})
  })
}

module.exports.post = function post (req, res) {
  const newTodo = new TodoModel(res.body)
  newTodo.save(function (err, todo) {
    if (err) return res.status(500).send()
    res.json({
      _id: todo._id
    })
  })
}

module.exports.put = function put (req, res) {
  TodoModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    .exec(function (err, data) {
      if (err) return res.status(500).send()
      res.send()
    })
}

module.exports.getOne = function getOne (req, res) {
  TodoModel.findById(req.params.id, function (err, todo) {
    if (err) return res.status(500).send()
    res.json({ todo })
  })
}
