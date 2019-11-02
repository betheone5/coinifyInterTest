'use strict';
const db = require("../models");

/**
 * Retrieve all currencies
 * Retrieve all currencies
 *
 * returns List
 **/
exports.getCurrencies = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "type" : "type",
  "value" : "value",
  "currencyCount" : 6
}, {
  "id" : 0,
  "type" : "type",
  "value" : "value",
  "currencyCount" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve user
 * Retrieve user
 *
 * returns user
 **/
exports.getUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
//     examples['application/json'] = {
//   "balance" : 6,
//   "name" : "name",
//   "id" : 0
// };
    db.user.findOne({where: {name:req.body.name}}).then (uuser => {
      examples[0] = uuser;
    } );
    
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Withdraw amount
 * withdraw amount
 *
 * amount Integer amount to withdraw
 * returns withdraw
 **/
exports.withdrawAmount = function(amount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : [ {
    "id" : 0,
    "type" : "type",
    "value" : "value",
    "currencyCount" : 6
  }, {
    "id" : 0,
    "type" : "type",
    "value" : "value",
    "currencyCount" : 6
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

