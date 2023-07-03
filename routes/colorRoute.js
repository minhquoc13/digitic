const router = require("express").Router();

const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getAllColor,
} = require("../controllers/colorController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createColor);
router.patch("/:id", authMiddleware, isAdmin, updateColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);
router.get("/", getAllColor);
router.get("/:id", getColor);

module.exports = router;
