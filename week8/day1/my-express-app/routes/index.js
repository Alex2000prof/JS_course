const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome !!");
});
router.get("/about", (req, res) => {
  res.send("About us");
});

module.exports = router;
