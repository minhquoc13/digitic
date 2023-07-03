const router = require("express").Router();

const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  ratingProduct,
  uploadImages,
  deleteImages,
} = require("../controllers/productController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImageResize,
} = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createProduct);
router.patch(
  "/upload/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageResize,
  uploadImages
);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.patch("/wishlist", authMiddleware, addToWishList);
router.patch("/rating", authMiddleware, ratingProduct);
router.patch("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/delete-image/:id", authMiddleware, isAdmin, deleteImages);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
