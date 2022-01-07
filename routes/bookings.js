
const express = require('express');
var bookingController = require('../controllers/booking');
const router = express.Router();


router.get("/all",bookingController.GetAllBookings);
router.get("/get/:id",bookingController.GetBookingByID);
router.post("/create",bookingController.CreateBooking);


module.exports = router