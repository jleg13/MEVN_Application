const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant");
const Reservation = require("../models/Reservation");

exports.readRestaurants = async (req, res) => {
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
        confirmation: "fail",
        msg: "no registered restaurants"
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
  let restaurant = await Restaurant.findOne({
    _id: req.params.restaurantId,
  }).exec();
  // Check provided restaurantId exists
  if (!restaurant) {
    return res.status(401).json({
      errors: {
        value: req.params.restaurantId,
        confirmation: "fail",
        msg: "the restaurantId is not registered",
        param: "restaurantId",
        location: "params",
      },
    });
  } else {
    return res.status(200).json({
      userId: req.params.restaurantId,
      data: restaurant,
      confirmation: "success",
      msg: "successfully retrieved restaurant data",
    });
  }
};

exports.readRestaurantSchedule = async (req, res) => {
  let restaurantDetails = await Restaurant.findOne({
    _id: req.params.restaurantId,
  }).exec();
  // Check provided restaurantId exists
  if (!restaurantDetails) {
    return res.status(401).json({
      errors: {
        value: req.params.restaurantId,
        confirmation: "fail",
        msg: "the restaurantId is not registered",
        param: "restaurantId",
        location: "params",
      },
    });
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
  } else if (restaurantReservations.length === 0) {
    return res.status(404).json({
      errors: {
        value: req.params.restaurantId,
        msg: "the restaurantId has no reservations",
        param: "restaurantId",
        location: "params",
      },
    });
  }
  // build current schedule
  let schedule = [];
  restaurantReservations.forEach((reservation) => {
    // Reservation date is in the future so add it to schedule
    if (new Date().setHours(0,0,0,0) <= reservation.date) {
      let dateIndex = schedule.findIndex((r) => r.date == reservation.date);
      // date not in list
      if (dateIndex === -1) {
        schedule.push({
          date: reservation.date,
          times: [{ time: reservation.time, tables: 1 }],
        });
      } else {
        let timeIndex = schedule[dateIndex].times.findIndex(
          (r) => r.time == reservation.time
        );
        // time not in list
        if (timeIndex === -1) {
          schedule[dateIndex].times.push({ time: reservation.time, tables: 1 });
        } else {
          schedule[dateIndex].times[timeIndex].tables += 1;
        }
      }
    } else {
      // Reservation date is in the past so delete it from database
      let oldReservation = Reservation.findOneAndDelete({ 
        userId: reservation._id,
        _id: reservation._id
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
  return res.status(200).json({
    restaurantData: restaurantDetails,
    restaurantSchedule: schedule,
    confirmation: "success",
    msg: "restaurant schedule successfully retrieved",
  });
};
