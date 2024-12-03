const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); 

const app = express();
app.use(cors()); // CORS 
app.use(express.json()); // JSON Payload Parsing

// bKash Payment Endpoint
app.post("/bkash-payment", async (req, res) => {
    const { amount } = req.body; // Amount from frontend
  
    try {
      // Step 1: Generate Token
      const tokenResponse = await axios.post(
        `${process.env.BKASH_BASE_URL}/tokenized/checkout/token/grant`,
        {
          app_key: process.env.BKASH_APP_KEY,
          app_secret: process.env.BKASH_APP_SECRET,
          username: process.env.BKASH_USERNAME,
          password: process.env.BKASH_PASSWORD,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const { id_token } = tokenResponse.data; // Extract token
  
      // Step 2: Create Payment
      const paymentResponse = await axios.post(
        `${process.env.BKASH_BASE_URL}/tokenized/checkout/create`,
        {
          amount: amount.toString(),
          currency: "BDT",
          intent: "sale",
          merchantInvoiceNumber: "INV" + Math.floor(Math.random() * 1000000),
        },
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
            "X-APP-Key": process.env.BKASH_APP_KEY,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (paymentResponse.data && paymentResponse.data.bkashURL) {
        res.json({ success: true, bkashURL: paymentResponse.data.bkashURL });
      } else {
        res.status(400).json({ success: false, message: "Failed to create payment" });
      }
    } catch (error) {
      console.error("Error in bKash Payment:", error.message);
      res.status(500).json({ success: false, message: "Server error during bKash payment" });
    }
  });
  

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
