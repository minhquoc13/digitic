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
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
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
router.get("/get-orders", authMiddleware, getOrders);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/create-order", authMiddleware, createOrder);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/empty-cart", authMiddleware, emptyCart);

router.patch("/edit-user", authMiddleware, isAdmin, updateUser);
router.patch("/save-address", authMiddleware, saveUserAddress);
router.patch("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.patch("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);
router.patch(
  "/order/update-order-status/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
