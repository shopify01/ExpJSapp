const express = require('express');
const app = express();
const path = express.Router();

var cors = require('cors');
app.use(cors());
app.use(express.json());



const bookings = require('./routes/bookings');
const cinemas = require('./routes/cinemas');

app.use("/cinema",cinemas);
app.use("/booking",bookings);

console.log('Server is Online');
app.listen(5000);