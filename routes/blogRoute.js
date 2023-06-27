const router = require("express").Router();

const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  disLikeBlog,
  uploadImages,
} = require("../controllers/blogController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImageResize, uploadPhoto } = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createBlog);
router.patch(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImageResize,
  uploadImages
);
router.patch("/likes", authMiddleware, likeBlog);
router.patch("/disLikes", authMiddleware, disLikeBlog);
router.patch("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);

module.exports = router;
