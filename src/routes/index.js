const express = require("express");
const routes = express.Router();

const HomeController = require('./HomeController');
const SensorDataController = require('./SensorDataController');

routes.get("/home", HomeController.index);

routes.post("/sensor_data/store", SensorDataController.store);

module.exports = routes;