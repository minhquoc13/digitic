const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected sucessfully!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
