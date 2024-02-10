// all the apis will be here for different models
// example for user its userRoutes
// url here is '/api/v1/user'

const router = require("express").Router();
const userRoutes = require("./user");
const tweetRoutes = require("./tweet");
const threadRoutes = require("./thread");

router.use("/user", userRoutes);
router.use("/tweet", tweetRoutes);
router.use("/thread", threadRoutes);

module.exports = router;
