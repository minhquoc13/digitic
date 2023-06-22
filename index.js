const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// database config
const dbConnect = require("./config/dbConnect");
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// import router
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
// import middlewares

app.use("/api/user", authRoute);
app.use("/api/product", productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
