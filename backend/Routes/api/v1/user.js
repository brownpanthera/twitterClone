// all the routes related to user will be here
// url here is `/api/v1/user/auth`

const router = require("express").Router();

router.get("/auth", (req, res) => {
  res.send("user auth route");
});
module.exports = router;