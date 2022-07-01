const mongoose = require("mongoose");
const PlayerModel = new mongoose.Schema(
  {
    playerName: {
      type: String,
      required: true,
    },
    wins: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const PlayerRecords = mongoose.model("PlayerRecords", PlayerModel);
module.exports = PlayerRecords;
