// Initialising express
const express = require("express");
const app = express();
app.use(express.json());

// Setting up port
const PORT = process.env.PORT || 5000;

// Setting up listener
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Connect to DB
const connectDB = require("./config/connect");
app.get("/", (req, res) => {
	res.send("API running");
});

connectDB();
