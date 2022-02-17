const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Theme = require("../../models/Theme");

// @route   POST api/themes
// @desc    Create theme
// @access  Public
router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("title", "Title is required").not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// Destructuring request
		const { body } = req;
		try {
			// See if theme exists
			let theme = await Theme.findOne({ name });
			if (theme) {
				res
					.status(400)
					.json({ errors: [{ msg: "A theme with this name already exists" }] });
			}
			// Create new document if not
			theme = new Theme({
				body,
			});
			await theme.save();
			res.send(theme);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
