const Car = require('../models/Car');

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found!' });
        }
        res.json(car);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.createCar = async (req, res) => {
    const { make, model, year, price_per_day } = req.body;
    try {
        const newCar = new Car({
            make,
            model,
            year,
            price_per_day,
        });
        const car = await newCar.save();
        res.json(car);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.updateCar = async (req, res) => {
    const { make, model, year, price_per_day, availability_status } = req.body;
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found!' });
        }
        if (make) car.make = make;
        if (model) car.model = model;
        if (year) car.year = year;
        if (price_per_day) car.price_per_day = price_per_day;
        if (availability_status !== undefined) car.availability_status = availability_status;

        await car.save();
        res.json(car);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found!' });
        }
        await car.remove();
        res.json({ msg: 'Car removed!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
    }
};
