const mongoose = require("mongoose");

// Founder schema and model
const founderSchema = new mongoose.Schema({
  address: String,
  totalBuys: Number,
  directBuys: Number,
  joinedAt: Date,
  rank: String,
  rewardGiven: Boolean,
  rewardAmount: Number,
  rewardAt: Date,
  manualChange: Boolean,
  lastUpdated: Date,
  level1Users: Array,
  level1Buys: Number,
});

const Founder = mongoose.model("Founder", founderSchema);

module.exports = Founder;
