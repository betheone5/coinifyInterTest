'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getCurrencies = function getCurrencies (req, res, next) {
  Default.getCurrencies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next) {
  Default.getUser()
    .then(function (response) {
      console.log(response);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.withdrawAmount = function withdrawAmount (req, res, next) {
  var amount = req.swagger.params['amount'].value;
  Default.withdrawAmount(amount)
    .then(function (response) {
      console.log(response)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
