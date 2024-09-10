const mongoose = require("mongoose");

// Referral Schema
const referralSchema = new mongoose.Schema({
  referrer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  referredUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amountEarned: {
    type: Number,
    default: 0.0,
  },
  referrerEarning: {
    type: Number,
    default: 0.0,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now, // Track when the referral was made
  },
});

const Referral = mongoose.model("Referral", referralSchema);

module.exports = Referral;
