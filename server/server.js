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

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/themes", require("./routes/api/themes"));
app.use("/api/blog", require("./routes/api/blog"));
app.use("/api/portfolio", require("./routes/api/portfolio"));
app.use("/api/timeline", require("./routes/api/timeline"));
