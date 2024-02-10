const router = require("express").Router();
const {
  postTweet,
  getAllTweets,
  deleteTweetById,
  getTweetById,
  deleteAllTweets,
  replyToTweet,
} = require("../../../Controllers/Tweet/tweetController");
const authMiddleware = require("../../../Middleware/authMiddleware");

router.post("/", authMiddleware, postTweet);
router.get("/allTweets", getAllTweets);
router.delete("/delete/:id", deleteTweetById); // this needs auth middleware
router.get("/:id", getTweetById); // this needs auth middleware
router.delete("/deleteAll", deleteAllTweets);
router.post("/reply/:id", authMiddleware, replyToTweet);

module.exports = router;
