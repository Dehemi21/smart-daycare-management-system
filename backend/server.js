
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Smart Daycare Backend is running!");
});

// Test route
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to Smart Daycare Management System API"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

