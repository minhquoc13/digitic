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
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
} = require("../controllers/userController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.patch("/password", authMiddleware, updatePassword);
router.patch("/reset-password/:token", resetPassword);

router.get("/all-users", getAllUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.get("/logout", logout);
router.get("/refresh", authMiddleware, handleRefreshToken);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.patch("/edit-user", authMiddleware, isAdmin, updateUser);
router.patch("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.patch("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
