const express = require("express");
const router = express.Router();
const stringsData = require("../data/strings.json");

router.get("/validate/:string", (req, res) => {
  const stringToValidate = req.params.string;
  const isValid = stringsData.strings.includes(stringToValidate);
  res.json({ isValid });
});

module.exports = router;
