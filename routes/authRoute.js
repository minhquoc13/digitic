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
  saveUserAddress,
  userCart,
  getUserCart,
  emptyCart,
} = require("../controllers/userController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.patch("/password", authMiddleware, updatePassword);
router.patch("/reset-password/:token", resetPassword);

router.get("/all-users", getAllUser);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/refresh", authMiddleware, handleRefreshToken);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.post("/cart", authMiddleware, userCart);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);

router.patch("/edit-user", authMiddleware, isAdmin, updateUser);
router.patch("/save-address", authMiddleware, saveUserAddress);
router.patch("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.patch("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
