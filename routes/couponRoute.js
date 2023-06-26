const router = require("express").Router();
const {
  createCoupon,
  getCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/couponController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", getAllCoupon);
router.get("/:id", getCoupon);
router.patch("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);

module.exports = router;
