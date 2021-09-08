const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    require: true,
  },
  cuisine: {
    type: String,
    require: true,
  },
  openTime: {
    type: String,
    require: true,
  },
  closeTime: {
    type: String,
    require: true,
  },
  seatingInterval: {
    type: Number,
    require: true,
  },
  tableCapacityPerInterval: {
    type: Number,
    require: true,
  },
  info: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  }
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);
