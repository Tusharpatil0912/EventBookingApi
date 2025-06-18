const express = require('express');
const router = express.Router();
const { bookEvent, getBookings } = require('../controllers/bookingController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/', verifyToken, bookEvent);
router.get('/', verifyToken, getBookings);

module.exports = router;
