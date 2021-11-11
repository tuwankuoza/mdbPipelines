const { getDatabase } = require('../config/mongodb')
const { sortData, filterEmpty, filterAvailable, filterSpecific, totalSold } = require('../pipelines/productPipeline')

class Product {
  static async findAll() {
    const db = getDatabase()
    const productCollection = db.collection('Product')
    const result = await productCollection.find().toArray()
    return result
  }
  static async sort(type, field) {
    const db = getDatabase()
    const productCollection = db.collection('Product')
    const pipleLine = sortData(type, field)
    const result  = await productCollection.aggregate(pipleLine).toArray()
    return result
  }
  static async findaAvailable() {
    const db = getDatabase()
    const productCollection = db.collection('Product')
    const pipleLine = filterAvailable()
    const result  = await productCollection.aggregate(pipleLine).toArray()
    return result
  }
  static async findEmpty() {
    const db = getDatabase()
    const productCollection = db.collection('Product')
    const pipleLine = filterEmpty()
    const result  = await productCollection.aggregate(pipleLine).toArray()
    return result
  }
  static async filter(name, brand, price, quantity) {
    const db = getDatabase()
    const productCollection = db.collection('Product')
    const pipleLine = filterSpecific(name, brand, price, quantity)
    const result  = await productCollection.aggregate(pipleLine).toArray()
    return result
  }
  static async totalSold() {
    const db = getDatabase()
    const productCollection = db.collection('Product')
    const pipleLine = totalSold()
    const result  = await productCollection.aggregate(pipleLine).toArray()
    return result
  }
}

module.exports = Product