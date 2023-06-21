const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");

const dbConnect = require("./config/dbConnect");
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// import router
const authRoute = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
// import middlewares

app.use("/api/user", authRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
