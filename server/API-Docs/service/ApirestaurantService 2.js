'use strict';


/**
 * Get details of a resuarant
 *
 * restaurantId String ID of restaurant to return
 * returns inline_response_200_1
 **/
exports.restaurantIdGET = function(restaurantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully retrieved restaurant",
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
 * Get a restaurants schedule
 *
 * restaurantId String ID of restaurant to return
 * returns inline_response_200_2
 **/
exports.restaurantIdScheduleGET = function(restaurantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "restaurant schedule successfully retrieved",
  "data" : [ {
    "_id" : "1234"
  }, {
    "_id" : "1234"
  } ],
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
 * Get all restaurants
 *
 * returns inline_response_200
 **/
exports.rootGET = function() {
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
 * Add an new restaurant
 *
 * body Body Restaurant object that needs to be saved to database
 * returns inline_response_201
 **/
exports.rootPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "successfully created restaurant",
  "data" : [ {
    "name" : "Bella Bella",
    "_id" : "1234"
  }, {
    "name" : "Bella Bella",
    "_id" : "1234"
  } ],
  "confirmation" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

