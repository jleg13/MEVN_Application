const express = require("express");
const mongoose = require("mongoose");

const searchRouter = require("./app/routes/search");
const userRouter = require("./app/routes/user");
const restaurantRouter = require("./app/routes/restaurant");

// set up variables
const { MONGO_IP, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD, PORT } =
require("./config/config")
const mongoDbUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/`;

// Set up Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/search", searchRouter);
app.use("/api/user", userRouter);
app.use("/api/restaurant", restaurantRouter);

// Set up Database
mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
    mongoose.set("useFindAndModify", false);
    mongoose.connection
      .on("error", (error) => console.error(error))
      .once("open", () => console.log("Connected to database!"));
    // Start listening once db is connected
    app.listen(PORT, () =>
      console.log(`Express is listening on port ${PORT}!`)
    );
  })
  .catch((err) => console.error(err));
