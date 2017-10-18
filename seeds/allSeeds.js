const OrderModel = require('../models/order')
const UserModel = require('../models/user')
const ListModel = require('../models/list')
const OfficeModel = require('../models/office')
const Faker = require('faker')
const idUser = '59e677f04c704a2ea875d141'
const idOffice = '59e6740fba0a7d2d12046ccf'
let totalInserts = 1000

module.exports.insertOrderData = async (req, res) => {
  let NewDataOrder
  for (var i = 0; i < totalInserts; i++) {
    NewDataOrder = new OrderModel()
    NewDataOrder.description = Faker.commerce.productName()
    NewDataOrder.isActive = Faker.random.boolean()
    NewDataOrder.user = idUser
    NewDataOrder.date = Faker.date.recent()
    NewDataOrder.tip = Faker.commerce.price()
    NewDataOrder.total = Faker.commerce.price()
    await NewDataOrder.save()
  }
  res.send('Data stored')
}

module.exports.insertUserData = async (req, res) => {
  let NewDataUser
  for (var i = 0; i < totalInserts; i++) {
    NewDataUser = new UserModel()
    NewDataUser.name = Faker.name.findName()
    NewDataUser.office = idOffice
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

module.exports.insertOfficeData = async (req, res) => {
  let NewDataOffice
  for (var i = 0; i < totalInserts; i++) {
    NewDataOffice = new OfficeModel()
    NewDataOffice.name = Faker.commerce.department()
    NewDataOffice.address = Faker.address.city() + ', ' + Faker.address.country()
    NewDataOffice.isActive = Faker.random.boolean()
    await NewDataOffice.save()
  }
  res.send('Data stored')
}

module.exports.insertListData = async (req, res) => {
  let NewDataList
  for (var i = 0; i < totalInserts; i++) {
    NewDataList = new ListModel()
    NewDataList.title = Faker.commerce.productName()
    NewDataList.date = Faker.date.recent()
    NewDataList.menu = Faker.commerce.productName() + ': ' + Faker.commerce.productMaterial() + ' for: ' + Faker.commerce.product()
    NewDataList.drinks = Faker.commerce.productName()
    NewDataList.isActive = Faker.random.boolean()
    await NewDataList.save()
  }
  res.send('Data stored')
}
