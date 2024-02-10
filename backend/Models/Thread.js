const mongoose = require("mongoose");

const ThreadSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Thread", ThreadSchema);
