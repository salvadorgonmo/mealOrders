const userModel = require('../models/user')
const Faker = require('faker')

module.exports.insertUserData = async (req, res) => {
  let newDataUser;
  let data;
  for(var i=0; i<10 ;i++){
    newDataUser =  new userModel()
    newDataUser.name = Faker.name.findName()
    newDataUser.office = "59e6740fba0a7d2d12046ccf"
    newDataUser.password = Faker.internet.password()
    newDataUser.email = Faker.internet.email()
    newDataUser.phone = Faker.phone.phoneNumber()
    newDataUser.role = Faker.finance.accountName()
    newDataUser.slackUser = Faker.internet.userName()
    newDataUser.isActive = Faker.random.boolean()
    newDataUser.token = Faker.random.word()
    data = await newDataUser.save()
  }
 res.send('Data stored')
}
