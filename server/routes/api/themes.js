const express = require("express");
const router = express.Router();

// @route   GET api/themes
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Themes route"));

module.exports = router;
