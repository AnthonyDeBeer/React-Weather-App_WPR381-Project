const express = require("express");
const fetch = require("node-fetch");

// Declare router var
let router = express.Router();

router.get("/:zipCode", (req, res) => {
  // get zipCode from front-end
  const zipCode = req.params.zipCode;

  // API key variable
  const apiId = "6ee585babcc5d59a1db64309a5f29471";

  // api url which takes zipCode and API variables, and sets the Country code to ZA and units to metric (Celcius)
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},ZA&appid=${apiId}&units=metric`;

  // fetch the url
  fetch(url)
    .then((r) => {
      return r.json();
    })
    .then((d) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(d);
    })
    .catch((err) => {
      console.log("An error occured:", err);
    });
});

module.exports = router;
