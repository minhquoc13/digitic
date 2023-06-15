const router = require("express").Router();

const { createUser } = require("../controllers/userController");

router.post("/register", createUser);

module.exports = router;
