const express = require('express');
const axios = require('axios');
const {parseResponse} = require("./src/utils/ResponseUtil");

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/exchange-rates', async (req, res) => {
    try {
        const response = await axios.get("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt");
        res.json(parseResponse(response));
    } catch (error) {
        console.error('Error proxying request:', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(PORT, () => {
    console.log(`CORS Proxy Server is running on port ${PORT}`);
});