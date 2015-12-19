var SanityChecks = {};

SanityChecks.checkOrders = function(orders, loans) {
  return new Promise(function(resolve, reject) {
    if (orders.length > 20) {
      throw new Error("Failed sanity check: over 20 orders");
    }
    resolve([orders, loans]);
  })
}

SanityChecks.checkFilteredLoans = function(loans) {
  return new Promise(function(resolve, reject) {
    if (loans.length > 20) {
      throw new Error("Failed sanity check: over 20 filtered loans");
    }
    resolve(loans);
  })
}

module.exports = SanityChecks;