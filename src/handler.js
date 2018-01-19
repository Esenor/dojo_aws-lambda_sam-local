const orderModel = require('./index.js')

module.exports.findCustomerByMail = (event, context, callback) => {
  console.log(event)
  callback(null, orderModel.getOrdersList(event.mail))
}
