const mongoose = require("mongoose");
const { Schema } = mongoose;

const ThemeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	title: String,
	colors: {
		body: String,
		text: String,
		border: String,
		navigation: {
			background: String,
			dropdown: String,
		},
		accent: {
			primary: String,
			secondary: String,
		},
	},
	isDefault: {
		type: Boolean,
		required: true,
	},
	isPrivate: {
		type: Boolean,
		required: true,
	},
});

module.exports = Theme = mongoose.model("Theme", ThemeSchema);
