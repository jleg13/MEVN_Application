const mongoose = require("mongoose");
const User = require("../models/User");
const Reservation = require("../models/Reservation");

// Define clients array for notification
let clients = [];
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Send out notifications after 5 secs to confirm reservation changed
// status from 'Processing' to 'Confirmed'
const sendEvents = async (reservationUpdate) => {
  let client;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].id === reservationUpdate.userId) {
      client = clients[i];
      break;
    }
  }
  await delay(5000);

  let updateStatus = await Reservation.findOneAndUpdate(
    {
      _id: reservationUpdate._id,
    },
    { status: "Confirmed" },
    {
      new: true,
    }
  ).exec();

  //get restaurant details to extract name
  let restaurant = await Restaurant.findOne({
    _id: reservationUpdate.restaurant,
  }).exec();


  if ( updateStatus && restaurant ) {
    clients.forEach(client => client.res.write(`event: reservationConfirmed\ndata:A user just confirmed a booking at ${restaurant.name}\n\n`))
  } else if ( updateStatus && !restaurant ) {
    clients.forEach(client => client.res.write("event: reservationConfirmed\ndata: A user just confirmed a booking at one of our restaurants\n\n"))
  } else if ( !updateStatus && restaurant ) {
    client.res.write(`event: reservationConfirmed\ndata: Sorry there was an error confirming your recent booking to ${restaurant.name}. Please try again\n\n`);
  } else {
    client.res.write("event: reservationConfirmed\ndata: Sorry there was an error confirming your booking. Please try again\n\n");
  }
};

exports.readUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exec();
  // Check provided password only if email is registered to an account
  if (!user) {
    return res.status(404).json({
      errors: {
        value: req.body.email,
        confirmation: "fail",
        msg: "The email provided is not registered",
        param: "email",
        location: "body",
      },
    });
  } else if (user.password !== req.body.password) {
    return res.status(401).json({
      errors: {
        value: req.body.email,
        confirmation: "fail",
        msg: "The password provided is incorrect",
        param: "password",
        location: "body",
      },
    });
  } else {
    return res.status(200).json({
      _id: user._id,
      userId: user.userId,
      email: user.email,
      confirmation: "success",
      msg: "Login successful",
    });
  }
};

exports.createUser = async (req, res) => {
  // create a user id to diplay on screen
  let uid = `${req.body.email.slice(0, 5)}${Math.floor(
    1000 + Math.random() * 9000
  )}`;

  let user = new User({
    userId: uid,
    email: req.body.email,
    password: req.body.password,
  });
  let userCheck = await User.findOne({ email: req.body.email }).exec();
  // Create a new user only if provided email has no account registered
  if (userCheck) {
    return res.status(401).json({
      errors: {
        value: req.body.email,
        confirmation: "fail",
        msg: "The email provided is already registered",
        param: "email",
        location: "body",
      },
    });
  } else {
    let output_user = await user.save();

    if (output_user) {
      return res.status(201).json({
        id: output_user._id,
        userId: uid,
        email: req.body.email,
        confirmation: "success",
        msg: "New account successfully registered",
      });
    }
    // In case, something went wrong
    res.status(400).json({ errors: [err] });
  }
};

exports.getUserReservations = async (req, res) => {
  let userReservations = await Reservation.find({
    userId: req.params.userId,
  }).exec();
  // Check provided userId exists
  if (!userReservations) {
    return res.status(401).json({
      errors: {
        value: req.params.userId,
        confirmation: "fail",
        msg: "the userId is not registered",
        param: "userId",
        location: "params",
      },
    });
  } else if (userReservations.length === 0) {
    return res.status(404).json({
      errors: {
        value: req.params.userId,
        confirmation: "fail",
        msg: "the userId has no reservations",
        param: "userId",
        location: "params",
      },
    });
  } else {
    return res.status(200).json({
      userId: req.params.userId,
      data: userReservations,
      confirmation: "success",
      msg: "successfully retrieved user reservations",
    });
  }
};

exports.getUserReservation = async (req, res) => {
  let userReservation = await Reservation.find({
    _id: req.params.reservationId,
    userId: req.params.userId,
  }).exec();
  // Check provided userId and reservationId exists
  if (!userReservation) {
    return res.status(401).json({
      errors: {
        value: { uid: req.params.userId, rid: req.params.reservationId },
        confirmation: "fail",
        msg: "the userId with reservation id is not registered",
        param: "userId",
        location: "params",
      },
    });
  } else {
    return res.status(200).json({
      userId: req.params.userId,
      reservationId: req.params.reservationId,
      data: userReservations,
      confirmation: "success",
      msg: "successfully retrieved user reservation",
    });
  }
};

exports.createUserReservation = async (req, res) => {
  let reservation = new Reservation({
    _id: new mongoose.Types.ObjectId(),
    userId: req.params.userId,
    restaurant: req.body.restaurant,
    date: req.body.date,
    time: req.body.time,
    guests: req.body.guests,
    mobile: req.body.mobile,
    requests: req.body.requests,
    status: req.body.status,
  });

  let outputReservation = await reservation.save();
  if (outputReservation) {
    res.status(201).json({
      data: outputReservation,
      confirmation: "success",
      msg: "New reservation successfully stored",
    });
    return sendEvents(outputReservation);
  }
  // In case, something went wrong
  res.status(400).json({ errors: [err] });
};

exports.updateUserReservation = async (req, res) => {
  let userReservation = await Reservation.findOneAndUpdate(
    {
      userId: req.params.userId,
      _id: req.params.reservationId,
    },
    req.body,
    {
      new: true,
    }
  ).exec();
  if (!userReservation) {
    return res.status(401).json({
      errors: {
        reservationId: req.params.reservationId,
        confirmation: "fail",
        msg: "userId and reservationId are not connected",
        param: "reservationId",
        location: "param",
      },
    });
  } else {
    res.status(201).json({
      data: userReservation,
      confirmation: "success",
      msg: "reservation successfully updated",
    });
    return sendEvents(userReservation);
  }
};

exports.deleteUserReservation = async (req, res) => {
  let userReservation = await Reservation.findOneAndDelete({
    userId: req.params.userId,
    _id: req.params.reservationId,
  }).exec();
  if (!userReservation) {
    return res.status(401).json({
      errors: {
        reservationId: req.params.reservationId,
        confirmation: "fail",
        msg: "userId and reservationId are not connected",
        param: "reservationId",
        location: "param",
      },
    });
  } else {
    return res.status(200).json({
      userId: req.params.userId,
      reservationId: req.params.reservationId,
      confirmation: "success",
      msg: "reservation successfully deleted",
    });
  }
};

exports.createNewGuestReservation = async (req, res) => {
  // create a guestId
  let guestId = `guest${Math.floor(1000 + Math.random() * 9000)}`;
  // generate random hedxidecimal on-off pass key
  const genRanHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  let guestPass = genRanHex(12);
  // create new user
  let user = new User({
    userId: guestId,
    email: guestId,
    password: guestPass,
  });
  // create new reservation
  let reservation = new Reservation({
    _id: new mongoose.Types.ObjectId(),
    userId: user._id,
    restaurant: req.body.restaurant,
    date: req.body.date,
    time: req.body.time,
    guests: req.body.guests,
    mobile: req.body.mobile,
    requests: req.body.requests,
    status: req.body.status,
  });
  // save guest user
  let output_user = await user.save();
  if (!output_user) {
    return res.status(401).json({
      errors: {
        value: guestId,
        confirmation: "guestId",
        msg: "the guest user cannot be saved",
        param: "userId",
        location: "body",
      },
    });
  }
  // save guest reservation
  let output_reservation = await reservation.save();
  if (!output_reservation) {
    return res.status(401).json({
      errors: {
        value: reservation._id,
        confirmation: "reservationId",
        msg: "the guest reservation cannot be saved",
        param: "reservationId",
        location: "body",
      },
    });
  }
  res.status(201).json({
    userId: guestId,
    reservationId: reservation._id,
    password: guestPass,
    confirmation: "success",
    msg: "guest reservation successfully saved",
  });
  return sendEvents(output_reservation);
};

exports.reservationNotification = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");

  const newClient = {
    id: req.params.userId,
    res,
  };
  clients.push(newClient);
  res.on("close", () => console.log(`connection closed!`));
};
