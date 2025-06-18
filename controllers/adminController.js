const events = require('../models/eventModel');
const bookings = require('../models/bookingModel'); // ✅ Same shared model

exports.getDashboardData = (req, res) => {
  const totalEvents = events.length;
  const totalBookings = bookings.length;

  const topEvents = [...events]
    .sort((a, b) => b.bookedSeats - a.bookedSeats)
    .slice(0, 5);

  res.json({
    status: true,
    message: 'Dashboard data',
    data: {
      totalEvents,
      totalBookings,
      topEvents
    }
  });
};
