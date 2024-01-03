const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/exchange-rates', async (req, res) => {
    try {
        const response = await axios.get("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt");
        res.json(response.data);
    } catch (error) {
        console.error('Error proxying request:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`CORS Proxy Server is running on port ${PORT}`);
});