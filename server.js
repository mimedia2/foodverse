const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); 

const app = express();
app.use(cors()); // CORS 

// Google Maps API 
app.get("/api/maps", async (req, res) => {
    const { origins, destinations } = req.query; 
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    console.log("Google Maps API Key:", apiKey); // Debugging
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
            params: {
                origins,
                destinations,
                key: apiKey, 
            },
        });
        res.json(response.data); 
    } catch (error) {
        console.error("Error fetching data from Google Maps API:", error.message);
        res.status(500).send("Error with Google Maps API");
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
