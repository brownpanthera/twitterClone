const {
  getAllThreads,
  deleteAllThreads,
} = require("../../../Controllers/Thread/threadController");

const router = require("express").Router();

router.get("/allThreads", getAllThreads);
router.delete("/deleteAll", deleteAllThreads);

module.exports = router;
