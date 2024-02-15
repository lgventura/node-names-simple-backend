const express = require("express");
const router = express.Router();
const stringsData = require("../data/strings.json");

router.get("/", (req, res) => {
  res.json(stringsData.strings);
});

module.exports = router;
