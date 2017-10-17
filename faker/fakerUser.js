const UserModel = require('../models/user')
const Faker = require('faker')

module.exports.insertUserData = async (req, res) => {
  let NewDataUser
  for (var i = 0; i < 10; i++) {
    NewDataUser = new UserModel()
    NewDataUser.name = Faker.name.findName()
    NewDataUser.office = '59e6740fba0a7d2d12046ccf'
    NewDataUser.password = Faker.internet.password()
    NewDataUser.email = Faker.internet.email()
    NewDataUser.phone = Faker.phone.phoneNumber()
    NewDataUser.role = Faker.finance.accountName()
    NewDataUser.slackUser = Faker.internet.userName()
    NewDataUser.isActive = Faker.random.boolean()
    NewDataUser.token = Faker.random.word()
    await NewDataUser.save()
  }
  res.send('Data stored')
}
