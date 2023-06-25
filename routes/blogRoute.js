const router = require("express").Router();

const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  disLikeBlog,
} = require("../controllers/blogController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBlog);
router.patch("/likes", authMiddleware, likeBlog);
router.patch("/disLikes", authMiddleware, disLikeBlog);
router.patch("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);

module.exports = router;
