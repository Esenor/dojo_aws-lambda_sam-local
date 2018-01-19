const faker = require('faker')

module.exports = {
  /**
   * get fake order
   * @return {object}
   */
  getOrdersList: (mail) => {
    console.log(mail)
    let totalOrder = Math.floor((Math.random() * 4) + 1)
    let orders = []
    for (let i = 0; i < totalOrder; i++) {
      orders.push(generateFakeOrder())
    }
    return orders
  }
}

/**
 * generate fake order
 * @return {object}
 */
function generateFakeOrder () {
  return {
    productId: faker.fake('{{random.uuid}}'),
    product: faker.fake('{{commerce.productName}}'),
    unitPrice: faker.fake('{{commerce.price}}'),
    qty: Math.floor((Math.random() * 5) + 1)
  }
}
