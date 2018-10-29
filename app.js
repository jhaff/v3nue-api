const express = require('express');
const app = express();
// const venuesRouter = require(./routers/venues)
const port = process.env.PORT || 3000;


var venues = {
   "name" : "Venue",
   "venue_description" : "Cool venue",
   "events" : ["dumb event", "event 2", "good event"]
}

app.get("/venues", (req, res) => {
   res.json(venues)
})

//SHOW All events for one venue
app.get("/venues/:venue_name/events", (req,res) => {

    if (req.params.venue_name === venues.name) {
        res.json(venues.events)
    }
    else{
        console.log("shit.")
    }


})



app.listen(port, () => {
   console.log('App Listening on port 3000');
});
