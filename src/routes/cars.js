const express = require('express');
const { getAllCars, getCarById, createCar, updateCar, deleteCar } = require('../controllers/carController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', getAllCars);
router.get('/:id', getCarById);
router.post('/', auth, createCar);
router.put('/:id', auth, updateCar);
router.delete('/:id', auth, deleteCar);

module.exports = router;
