const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // .env ফাইল লোড করার জন্য

const app = express();
app.use(cors()); // CORS সমস্যা সমাধান

// Google Maps API এর জন্য এন্ডপয়েন্ট
app.get("/api/maps", async (req, res) => {
    const { origins, destinations } = req.query; // ফ্রন্টএন্ড থেকে origins এবং destinations
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // API Key .env থেকে

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
            params: {
                origins,
                destinations,
                key: apiKey, // ব্যাকএন্ড থেকে API Key পাঠানো হচ্ছে
            },
        });
        res.json(response.data); // রেসপন্স ফ্রন্টএন্ডে পাঠানো
    } catch (error) {
        console.error("Error fetching data from Google Maps API:", error.message);
        res.status(500).send("Error with Google Maps API");
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
