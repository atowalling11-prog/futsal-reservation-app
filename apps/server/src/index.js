const express = require('express');
const cors = require('cors');
const { courts, bookings } = require('./data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Futsal API is running', timestamp: new Date().toISOString() });
});

app.get('/api/courts', (req, res) => {
  res.json(courts);
});

app.get('/api/courts/:id', (req, res) => {
  const court = courts.find((item) => item.id === Number(req.params.id));

  if (!court) {
    return res.status(404).json({ error: 'Court not found' });
  }

  return res.json(court);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.get('/api/bookings/:id', (req, res) => {
  const booking = bookings.find((item) => item.id === Number(req.params.id));

  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  return res.json(booking);
});

app.post('/api/bookings', (req, res) => {
  const { courtId, playerName, date, slot } = req.body;

  if (!courtId || !playerName || !date || !slot) {
    return res.status(400).json({ error: 'courtId, playerName, date and slot are required' });
  }

  const court = courts.find((item) => item.id === Number(courtId));
  if (!court) {
    return res.status(404).json({ error: 'Court not found' });
  }

  const duplicate = bookings.some(
    (booking) =>
      Number(booking.courtId) === Number(courtId) &&
      booking.date === date &&
      booking.slot === slot
  );

  if (duplicate) {
    return res.status(409).json({ error: 'This slot is already booked' });
  }

  const newBooking = {
    id: Date.now(),
    courtId: Number(courtId),
    courtName: court.name,
    playerName,
    date,
    slot,
    status: 'confirmed'
  };

  bookings.push(newBooking);
  return res.status(201).json(newBooking);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
