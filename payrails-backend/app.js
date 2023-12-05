const express = require('express');
const cors = require('cors');
const authService = require('./auth-service');
const app = express();



// Define routes and middleware here
app.use(cors());

/*handle result and error as needed*/
async function routeHandler(req, res) {
    try {
        const result = await authService.initializeClient();
        res.json({ "publicKey": result.tokenization.publicKey, "holderReference": result.holderReference });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

app.get('/', routeHandler);

// Start the server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

