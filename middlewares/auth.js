const modelUser = require ('../models/user')
const express = require('express')
const Router = express.Router()

module.exports.authorize = async function (req, res, next)  {
  console.log('what')
  try{
    const tokenUno = req.get('Authorization')
    const exist = await modelUser.findOne({ token: tokenUno })
    //console.log(tokenUno)
    if(exist){
      req.app.locals.email = email
      req.app.locals.password = password
      next()
    }else{
      throw new err()
    }
  }catch(err){
    res.status(401).send()
  }
}

//Router.post('/login', authorize)

//module.exports = Router