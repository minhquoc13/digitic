const router = require("express").Router();

const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  ratingProduct,
} = require("../controllers/productController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.patch("/wishlist", authMiddleware, addToWishList);
router.patch("/rating", authMiddleware, ratingProduct);
router.patch("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
