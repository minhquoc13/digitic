const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    numViews: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisLiked: {
      type: Boolean,
      default: false,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    disLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    images: {
      type: String,
      default:
        "https://images.ctfassets.net/b4k16c7lw5ut/4YV0EVOQyGbPCJsrlasVZI/7baa979e40d2258434a826d45d88db52/YouTube_thumbnail_blog_-_thumbnail.png?w=1920&h=1080&q=50&fm=png",
    },
    author: {
      type: String,
      default: "Admin",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
