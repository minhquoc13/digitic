const User = require("../models/userModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email });
  if (!findUser) {
    // Create new user
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    // User already exits
    res.json({ msg: "User already exits!", sucess: false });
  }
};

module.exports = { createUser };
