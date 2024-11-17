const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors()); // CORS সমস্যা সমাধান

app.get("/api/maps", async (req, res) => {
    const { origins, destinations, apiKey } = req.query;

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
        console.error("Error fetching data from Google Maps API:", error);
        res.status(500).send("Error with Google Maps API");
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
