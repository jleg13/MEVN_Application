const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  guests: {
    type: Number,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  requests: {
    type: String,
  },
  status: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Reservation", ReservationSchema);
