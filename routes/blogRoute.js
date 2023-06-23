const router = require("express").Router();

const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
} = require("../controllers/blogController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBlog);
router.patch("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);

module.exports = router;
