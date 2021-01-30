const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Portfolio collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portfolio"
);

const projectSeed = [
  {
    name: "Weather Dashboard",
    details:"This project is a simple weather dashboard to display weather data to the user based on their current location or a search parameter." ,
    url: "https://github.com/eamenatt/weather-app"
  },
  {
    name: "Pandemic Pastimes: What's Cookin'?",
    details:"This was a group project to create an application that allowed the user to receive receipe recommendations based on the ingredients they have entered." ,
    url: "https://github.com/eamenatt/Pandemic-Pastime"
  },
  
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
