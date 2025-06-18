const events = require('../models/eventModel');
let eventId = 1;

exports.createEvent = (req, res) => {
  const { name, category, location, date, maxSeats } = req.body;
  const event = { id: eventId++, name, category, location, date, maxSeats, bookedSeats: 0 };
  events.push(event);
  res.json({ status: true, message: 'Event created', data: event });
};

exports.getEvents = (req, res) => {
  let { page = 1, limit = 10, category, startDate, endDate } = req.query;
  page = Number(page);
  limit = Number(limit);

  let filteredEvents = [...events];

  // Filter by category
  if (category) {
    filteredEvents = filteredEvents.filter(event => event.category.toLowerCase() === category.toLowerCase());
  }

  // Filter by date range
  if (startDate || endDate) {
    filteredEvents = filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      if (startDate && eventDate < new Date(startDate)) return false;
      if (endDate && eventDate > new Date(endDate)) return false;
      return true;
    });
  }

  const start = (page - 1) * limit;
  const paginatedEvents = filteredEvents.slice(start, start + limit);

  res.json({
    status: true,
    message: 'Events fetched successfully',
    total: filteredEvents.length,
    page,
    limit,
    data: paginatedEvents
  });
};


exports.getEventById = (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(e => e.id === id);

  if (!event) {
    return res.status(404).json({ status: false, message: 'Event not found' });
  }

  res.json({ status: true, data: event });
};

exports.updateEvent = (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(e => e.id === id);

  if (!event) {
    return res.status(404).json({ status: false, message: 'Event not found' });
  }

  const { name, category, location, date, maxSeats } = req.body;

  if (name) event.name = name;
  if (category) event.category = category;
  if (location) event.location = location;
  if (date) event.date = date;
  if (maxSeats !== undefined) event.maxSeats = maxSeats;

  res.json({ status: true, message: 'Event updated', data: event });
};


exports.deleteEvent = (req, res) => {
  const id = Number(req.params.id);
  const index = events.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ status: false, message: 'Event not found' });
  }

  const deletedEvent = events.splice(index, 1)[0];

  res.json({ status: true, message: 'Event deleted', data: deletedEvent });
};
