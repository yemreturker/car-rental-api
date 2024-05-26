const express = require('express');
const { createReservation, getAllReservations, getReservationById, deleteReservation } = require('../controllers/reservationController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createReservation);
router.get('/', auth, getAllReservations);
router.get('/:id', auth, getReservationById);
router.delete('/:id', auth, deleteReservation);

module.exports = router;
