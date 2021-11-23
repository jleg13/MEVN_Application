'use strict';


/**
 * Search based on date, time and keyword
 *
 * date String date for search
 * time String time for search
 * guests String guests for search
 * returns inline_response_200
 **/
exports.dateTimeGuestsGET = function(date,time,guests) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully retrieved restaurants",
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search based on keyword
 *
 * keyword String keyword for search
 * returns inline_response_200
 **/
exports.keywordGET = function(keyword) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully retrieved restaurants",
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

