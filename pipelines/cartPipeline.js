function purchaseData() {
  return [
    { 
      $match: {}
    },
    {
      $group: {
        _id: "$customer",
        totalItem: {
          $sum: "$quantity"
        },
        totalPurchase: {
          $sum: "$total"
        }
      }
    },
    {
      $sort: {
        totalPurchase: -1
      }
    }
  ]
}

function singlePurchase(name) {
  return [
    { 
      $match: {
        customer: name
      }
    },
    {
      $group: {
        _id: "$customer",
        totalItem: {
          $sum: "$quantity"
        },
        totalPurchase: {
          $sum: "$total"
        }
      }
    }
  ]
}

module.exports = {
  purchaseData,
  singlePurchase
}