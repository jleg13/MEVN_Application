const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant");
const Reservation = require("../models/Reservation");

exports.readRestaurants = async (req, res) => {
  let restaurants = await Restaurant.find();
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
        confirmation: "fail",
        msg: "no registered restaurants",
      },
    });
  } else {
    return res.status(200).json({
      data: restaurants,
      confirmation: "success",
      msg: "successfully retrieved restaurants",
    });
  }
};

exports.createRestaurant = async (req, res) => {
  let restaurant = new Restaurant({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    cuisine: req.body.cuisine,
    openTime: req.body.openTime,
    closeTime: req.body.closeTime,
    seatingInterval: req.body.seatingInterval,
    tableCapacityPerInterval: req.body.tableCapacityPerInterval,
    info: req.body.info,
    image: req.body.image,
  });
  let restaurantCheck = await Restaurant.findOne({
    name: req.body.name,
  }).exec();
  // Create a new restaurant only if provided name is not registered
  if (restaurantCheck) {
    return res.status(401).json({
      errors: {
        value: req.body.name,
        confirmation: "fail",
        msg: "the restaurant name is already in use",
        param: "name",
        location: "body",
      },
    });
  } else {
    let outputRestaurant = await restaurant.save();
    if (outputRestaurant) {
      return res.status(201).json({
        data: restaurant,
        confirmation: "success",
        msg: "New restaurant successfully registered",
      });
    }
    // In case, something went wrong
    res.status(401).json({ errors: [err] });
  }
};

exports.readRestaurantById = async (req, res) => {
  let restaurants = await Restaurant.find();
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
        confirmation: "fail",
        msg: "no registered restaurants",
      },
    });
  } else {
    let restaurant = {};
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i]._id == req.params.restaurantId) {
        restaurant = restaurants[i];
        break;
      }
    }
    return res.status(200).json({
      data: restaurant,
      confirmation: "success",
      msg: "successfully retrieved restaurants",
    });
  }
};

exports.readRestaurantSchedule = async (req, res) => {
  let restaurantDetails = await Restaurant.find();
  // Check query
  if (!restaurantDetails) {
    return res.status(401).json({
      errors: {
        confirmation: "fail",
        msg: "there was a problem getting restaurants",
      },
    });
  } else if (restaurantDetails.length === 0) {
    return res.status(404).json({
      errors: {
        confirmation: "fail",
        msg: "no registered restaurants",
      },
    });
  } else {
    for (let i = 0; i < restaurantDetails.length; i++) {
      if (restaurantDetails[i]._id == req.params.restaurantId) {
        restaurantDetails = restaurantDetails[i];
        break;
      }
    }
  }
  let restaurantReservations = await Reservation.find({
    restaurant: req.params.restaurantId,
  }).exec();
  // Check provided restaurant details have bookings
  if (!restaurantReservations) {
    return res.status(401).json({
      errors: {
        value: req.params.restaurantId,
        confirmation: "fail",
        msg: "the restaurantId does not exist",
        param: "restaurantId",
        location: "params",
      },
    });
  } 
  // build current schedule
  let schedule = {};
  let openHr = parseInt(restaurantDetails.openTime.slice(0, 2));
  let openMin = parseInt(restaurantDetails.openTime.slice(3, 5));
  let closeHr = parseInt(restaurantDetails.closeTime.slice(0, 2));
  let interval = restaurantDetails.seatingInterval;
  while (openHr !== closeHr) {
      if (openMin === 0) {
        schedule[`${openHr}:00`] = [];
      } else {
        schedule[`${openHr}:${openMin}`] = [];
      }
    openMin += interval;
    if (openMin === 60) {
      openMin = 0;
      openHr += 1;
    }
  }

  restaurantReservations.forEach((reservation) => {
    // Reservation date is in the future so add it to schedule
    if (new Date().setHours(0, 0, 0, 0) <= reservation.date) {
      for (const time in schedule) {
        if (reservation.time === time){
          schedule[time].push(1)
        }
      }
    } else {
      // Reservation date is in the past so delete it from database
      let oldReservation = Reservation.findOneAndDelete({
        userId: reservation._id,
        _id: reservation._id,
      }).exec();
      if (!oldReservation) {
        return res.status(401).json({
          errors: {
            reservationId: req.params.reservationId,
            confirmation: "fail",
            msg: "failed to build restaurant schedule",
            param: "reservationId",
          },
        });
      }
    }
  });
  for (const time in schedule) {
    if (schedule[time].length === restaurantDetails.tableCapacityPerInterval){
      delete schedule[time];
    }
  }
  return res.status(200).json({
    data: Object.getOwnPropertyNames(schedule),
    id: restaurantDetails._id,
    confirmation: "success",
    msg: "restaurant schedule successfully retrieved",
  });
};
