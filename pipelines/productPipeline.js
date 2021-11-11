function sortData(type, field) {
  let opt = {}
  opt[field] = type === 'desc' ? -1 : 1
  return [
    { 
      $match: {}
    },
    {
      $sort: opt
    }
  ]
}

function filterAvailable() {
  return [
    {
      $match: {
        quantity: {
          $ne: 0
        }
      }
    },
  ]
}

function filterEmpty() {
  return [
    {
      $match: {
        quantity: {
          $eq: 0
        }
      }
    },
  ]
}

function filterSpecific(name, brand, price, quantity) {
  return [
    {
      $match: {
        name: name,
        price: {
          $gte: price
        },
        quantity: {
          $gte: quantity
        },
        brand: brand,
      }
    },
  ]
}

function totalSold() {
  return [
    { 
      $match: {}
    },
    {
      $group: {
        _id: "$brand",
        averageSold: {
          $avg: "$sold"
        },
        total: {
          $sum: "$sold"
        }
      }
    },
    {
      $sort: {
        total: -1
      }
    }
  ]
}

module.exports = {
  sortData,
  filterAvailable,
  filterEmpty,
  filterSpecific,
  totalSold
}