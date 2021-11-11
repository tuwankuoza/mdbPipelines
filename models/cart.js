const { getDatabase } = require('../config/mongodb')
const { purchaseData, singlePurchase } = require('../pipelines/cartPipeline')

class Cart {
  static async purchaseData() {
    const db = getDatabase()
    const cartCollection = db.collection('Cart')
    const pipleLine = purchaseData()
    const result  = await cartCollection.aggregate(pipleLine).toArray()
    return result
  }
  static async singlePurchase(name) {
    const db = getDatabase()
    const cartCollection = db.collection('Cart')
    const pipleLine = singlePurchase(name)
    const result  = await cartCollection.aggregate(pipleLine).toArray()
    return result
  }
}

module.exports = Cart