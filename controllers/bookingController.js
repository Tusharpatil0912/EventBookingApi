let bookings = [];
const events = require('../models/eventModel');
const { sendConfirmationEmail } = require('../utils/emailUtil');

exports.bookEvent = async (req, res) => {
  const { eventId, numberOfSeats } = req.body;
  const event = events.find(e => e.id === Number(eventId));
  if (!event) return res.status(404).json({ status: false, message: 'Event not found' });
  if (event.bookedSeats + numberOfSeats > event.maxSeats)
    return res.status(400).json({ status: false, message: 'Not enough seats' });

  event.bookedSeats += numberOfSeats;
  bookings.push({ userId: req.user.id, eventId, numberOfSeats });
  
  try {
    await Promise.all([
      sendConfirmationEmail(req.user.id),
      sendConfirmationEmail(req.user.id)
    ]);
    res.json({ status: true, message: 'Booking successful' });
  } catch (err) {
    res.status(500).json({ status: false, message: 'Email failed' });
  }
};

exports.getBookings = (req, res) => {
  const userBookings = bookings.filter(b => b.userId === req.user.id);
  res.json({ status: true, data: userBookings });
};


