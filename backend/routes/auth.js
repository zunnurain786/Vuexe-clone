const express = require("express");
const {
  registerUser,
  authUser,
  post,
  getdata,
  getdatasingle,
  put,
  deletedata,
  getActiveUser,
  postActiveUser,
} = require("../controllers/authController");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", authUser);
router.get("/founders", getdata);
router.post("/founders/new", post);
router.get("/founders/:id", getdatasingle);
router.put("/founders/:id", put);
router.delete("/founders/:id", deletedata);
router.get("/activeusers", getActiveUser);
router.post("/postactiveUser", postActiveUser);

module.exports = router;
