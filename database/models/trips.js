const mongoose = require('mongoose');
const db = require('../index.js');

const tripSchema = mongoose.Schema({
  "location": {type: String, required: true},
  "flightInfo": {
    "airline": {type: String, required: true},
    "origin": {type: String, required: true},
    "destination": {type: String, required: true},
    "departureTime": {type: String, required: true},
    "arrivalTime": {type: String, required: true},
    "totalTime": {type: String, required: true},
    "stops" : [{type: String, required: true}],
    "price": {type: String, required: true}
  },
  "drive": {type: Boolean, required: true},
  "itenarary": [{type: String, required: true}],
  "packingList": [{type: String, required: true}]
});

const Trip = db.model('Trip', tripSchema);

module.exports = Trip;