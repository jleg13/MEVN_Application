const Restaurant = require("../models/Restaurant");

exports.readRestaurantsByKeyword = async (req, res) => {
  let errors = validationResult(req);
  // error on search content
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let keywordSearch = await Restaurant.find({
    cuisine: req.params.keyword,
  }).exec();
  // Check keyword for matches
  if (!keywordSearch) {
    return res.status(401).json({
      errors: {
        value: req.params.keyword,
        confirmation: "fail",
        msg: "the keyword search failed",
        param: "keyword",
        location: "params",
      },
    });
  } else if (keywordSearch.length === 0) {
    return res.status(404).json({
      errors: {
        value: req.params.keyword,
        confirmation: "fail",
        msg: "the keyword found no matches"
      },
    });
  } else {
    return res.status(200).json({
      userId: req.params.keyword,
      data: keywordSearch,
      confirmation: "success",
      msg: "found matching search results",
    });
  }
};

exports.readRestaurantsBySearch = async (req, res) => {
  let errors = validationResult(req);
  // error on search content
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if (req.query.keyword) {
    let search = await Restaurant.find({
      cuisine: req.query.keyword,
    }).exec();
    // Check for matches
    if (!search) {
      return res.status(401).json({
        errors: {
          value: req.query.keyword,
          confirmation: "fail",
          msg: "the keyword search failed",
          param: "keyword",
          location: "query",
        },
      });
    } else if (search.length === 0) {
      return res.status(404).json({
        errors: {
          value: req.params.keyword,
          confirmation: "fail",
          msg: "the keyword found no matches"
        },
      });
    } else {
      return res.status(200).json({
        data: search,
        date: req.params.date,
        time: req.params.time,
        guests: req.params.guests,
        confirmation: "success",
        msg: "successfully retrieved restaurants",
      });
    }
  } else {
    let restaurants = await Restaurant.find().exec();
    // Check query
    if (!restaurants) {
      return res.status(401).json({
        errors: {
          confirmation: "fail",
          msg: "there was a problem getting restaurants",
        },
      });
    } else if (restaurants.length === 0) {
      return res.status(404).json({
        errors: {
          value: req.params.keyword,
          confirmation: "fail",
          msg: "the keyword found no matches"
        },
      });
    } else {
      return res.status(200).json({
        data: restaurants,
        date: req.params.date,
        time: req.params.time,
        guests: req.params.guests,
        confirmation: "success",
        msg: "successfully retrieved restaurants",
      });
    }
  }
};
