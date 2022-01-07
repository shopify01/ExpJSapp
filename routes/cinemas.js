
const express = require('express');
var cinemaController = require('../controllers/cinema');
const router = express.Router();


router.get("/all",cinemaController.GetAllCinemas);
router.get("/GetCinemaListInCity/:City",cinemaController.GetCinemaListInCity);
router.get("/GetBookedSeats/:CinemaID",cinemaController.GetBookedSeats);
router.get("/GetAvailableSeats/:CinemaID",cinemaController.GetAvailableSeats);
router.get("/GetCinemaByID/:id",cinemaController.GetCinemaByID);


module.exports = router;