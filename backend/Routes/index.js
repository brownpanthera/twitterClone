// this is the root file for api
// URL here is '/api'
const passport = require("passport");
const router = require("express").Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "APIs running successfully" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:3000/",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/profile?token=tokenishere");
  }
);

router.use("/api", require("./api"));

module.exports = router;
