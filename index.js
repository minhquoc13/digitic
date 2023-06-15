const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("./config/dbConnect");
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// import router
const authRoute = require("./routes/authRoute");

app.use("/api/user", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
