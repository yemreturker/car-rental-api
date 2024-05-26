const Reservation = require('../models/Reservation');
const Car = require('../models/Car');

exports.createReservation = async (req, res) => {
    const { carId, start_date, end_date } = req.body;
    try {
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found!' });
        }

        const totalDays = (new Date(end_date) - new Date(start_date)) / (1000 * 60 * 60 * 24);
        const total_price = totalDays * car.price_per_day;

        const newReservation = new Reservation({
            user: req.user.id,
            car: carId,
            start_date,
            end_date,
            total_price,
        });

        await newReservation.save();
        res.json(newReservation);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ user: req.user.id }).populate('car', ['make', 'model', 'year']);
        res.json(reservations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate('car', ['make', 'model', 'year']);
        if (!reservation) {
            return res.status(404).json({ msg: 'Reservation not found!' });
        }
        res.json(reservation);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ msg: 'Reservation not found!' });
        }
        await reservation.remove();
        res.json({ msg: 'Reservation removed!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};
