const router = require("express").Router();

const {
  createUser,
  loginUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
} = require("../controllers/userController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.get("/all-users", getAllUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/refresh", handleRefreshToken);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.patch("/edit-user", authMiddleware, isAdmin, updateUser);
router.patch("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.patch("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);
router.delete("/:id", deleteUser);

module.exports = router;
