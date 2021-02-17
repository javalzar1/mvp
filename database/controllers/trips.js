const Trip = require('../models/trips.js');

const createOne = (data, cb) => {
  const {
    location,
    flightInfo,
    drive,
    itenarary,
    packingList
  } = data;

  const insert = new Trip({
    location: location,
    flightInfo: {
      airline: flightInfo.airline,
      origin: flightInfo.origin,
      destination: flightInfo.destination,
      departureTime: flightInfo.departureTime,
      arrivalTime: flightInfo.arrivalTime,
      totalTime: flightInfo.totalTime,
      stops: [...flightInfo.stops],
      price: flightInfo.price,
    },
    drive: drive,
    itenarary: [...itenarary],
    packingList: [...packingList]
  });

  insert.save((err, result) => {
    if (err) {
      console.log('ERROR')
      cb(err, null);
    } else {
      console.log('insert made')
      cb(null, result);
    }
  })
}

const getAll = (cb) => {
  Trip.find({})
    .then(result => cb(null, result))
    .catch(err => cb(err, null));
}

module.exports = {
  createOne,
  getAll
};