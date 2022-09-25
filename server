const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())

let PORT = 3050

userlocation = {
    "latitude": 0,
    "longitude": 0
}
axios.defaults.headers.common = {
    'Authorization': 'Bearer ' + ''
};
app.get("/:lat/:long", (req, res) => {
    let lat = req.params.lat
    let long = req.params.long
    console.log(lat,long)
    axios.get(`https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${long}&radius=1500`,
        {
            headers:{
                'Authorization':'Bearer ''
            }
        })
        .then(function (response) {
            res.header("Access-Control-Allow-Origin", "https://akshithd.github.io");
            res.json(response.data);
          })
        .catch(function (error) {
            console.log(error);
        });
});
app.get("/google/:lat/:long", (req, res) => {
    let lat = req.params.lat
    let long = req.params.long
    console.log(lat,long)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=route&key=`)
        .then(function (response) {
            res.header("Access-Control-Allow-Origin", "https://akshithd.github.io");
            res.json(response.data);
          })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(PORT)
console.log(`entered the server on ${PORT}`)
