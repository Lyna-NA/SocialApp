//modules: require
const express = require("express");
const HttpError = require("./models/HttpError");

// //modules: routes
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const postRoutes = require("./routes/post-routes");

//modules : mongose
const mongoose = require("mongoose");

//other modules
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//using dotenv
dotenv.config();

//express: instance
const app = express();

// //app.use: urlEncoded
// //Content-Type: application/x-www-form-url-encoded
// app.use(express.urlencoded({ extended: true }));

// app.use("/images", express.static(path.join(__dirname, "images")));

//app.use: json
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//app.use: routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

//app.use: Fallback route
app.use("/", (req, res) => {
  throw new HttpError(404, "Not Found");
});

//app.use: Thrown Error Handler
app.use((error, req, res, next) => {
  return res.status(error.code).json({ status: false, message: error.message });
});

//mongose: connect
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log(e.message));

//app: listen
app.listen(5000, () => {
  console.log("Backend server is running!");
});