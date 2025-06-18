// const express = require('express');
// const router = express.Router();
// const { createEvent, getEvents } = require('../controllers/eventController');
// const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// router.post('/', verifyToken, isAdmin, createEvent);
// router.get('/', getEvents);

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// All Events
router.get('/', getEvents);
router.get('/:id', getEventById);

// Admin-only
router.post('/', verifyToken, isAdmin, createEvent);
router.put('/:id', verifyToken, isAdmin, updateEvent);
router.delete('/:id', verifyToken, isAdmin, deleteEvent);

module.exports = router;
