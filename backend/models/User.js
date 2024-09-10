const mongoose = require("mongoose");

// Define the merged User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    default: "employee",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  totalEarning: {
    type: Number,
    default: 0.0,
  },
  referredTotalEarning: {
    type: Number,
    default: 0.0,
  },
  referrals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Referral",
    },
  ], // Track referrals made by this user
});

// Create the User model from the schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
