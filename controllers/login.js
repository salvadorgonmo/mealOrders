const modelUser = require ('../models/user')
const Guid = require ('guid')

module.exports.login = async (req, res) => {
  try{
    const email = req.body.email
    const password = req.body.password
    const user = await modelUser.findOne({email: email})
     if(user.email == email && user.password == password){
      const token = Guid.create()
      user.token = token
      await user.save()
      res.status(200).send(token)
    }else{
      throw new err()
    }
  }catch(err){
    res.status(401).send('Your password or email are not correct')
  }
}

module.exports.logout = async (req, res) => {
  const del = await modelUser.findOneAndUpdate({ token: req.app.locals.token }, {token: null})
  res.status(200).send('Logout done')
}


/*

const UserModel = require('../models/user')
const passport = require('passport')
const Strategy = require('passport-local').Strategy
*/


/*
module.exports.login = function access (req, res) {
  passport.use(new trategy({
    usernameField: 'email',
    passwordField: 'password'
  } ,
    async function(username, password, done) {
      console.log('ksjhjk')
      // try {
         //console.log('im in')
         const email = await UserModel.findOne({ email: username })
         if(!email){
           return done(null, false, { message: 'incorrect email. '})
          // console.log('error')
         }
         if(!email.validPassword(password)) {
           return done(null, false, { message: 'incorrect password.'})
         }
         res.status(200).send()
         return done(null, email)
    //   }catch (err){ 
         //onsole.log('im out')
         done(err)
   //    }
     }
  ))
}
*/

/*
passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
  function(username, password, cb) {
    UserModel.findOne({ email: username}, function(err, user) {
      if (err) { return cb(err) }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false) }
      return cb(null, user);
    })
  }))

/*

/*
module.exports.login = function (req, res) {
  passport.use(new LocalStrategy({
    usernameField: req.body.email,
    passwordField: req.body.password
  },
    function(username, password, done) {
      console.log('im in')
      UserModel.find({ email: username }, function(err, user) {
        if (err) { return done(err) }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
    }
  ))
}

*/

