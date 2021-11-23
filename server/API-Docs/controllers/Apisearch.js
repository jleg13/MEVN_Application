'use strict';

var utils = require('../utils/writer.js');
var Apisearch = require('../service/ApisearchService');

module.exports.dateTimeGuestsGET = function dateTimeGuestsGET (req, res, next, date, time, guests) {
  Apisearch.dateTimeGuestsGET(date, time, guests)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.keywordGET = function keywordGET (req, res, next, keyword) {
  Apisearch.keywordGET(keyword)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
