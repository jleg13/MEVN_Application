const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});
module.exports = mongoose.model("User", UserSchema);
