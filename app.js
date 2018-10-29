const express = require('express');
const app = express();
const venuesRouter = require(./routers/venues)
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App Listening on port 3000');
});
