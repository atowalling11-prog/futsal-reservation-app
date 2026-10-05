const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const courts = [
  { id: 1, name: 'Court A', type: 'Indoor', price: 120, slots: ['10:00', '11:00', '12:00', '18:00'] },
  { id: 2, name: 'Court B', type: 'Indoor', price: 140, slots: ['09:00', '10:00', '14:00', '19:00'] },
  { id: 3, name: 'Court C', type: 'Outdoor', price: 160, slots: ['08:00', '13:00', '17:00', '20:00'] }
];

const bookings = [
  { id: 1, courtId: 1, playerName: 'Aisha', date: '2026-10-05', slot: '18:00' }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Futsal API is running' });
});

app.get('/api/courts', (req, res) => {
  res.json(courts);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
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

  const newBooking = {
    id: Date.now(),
    courtId: Number(courtId),
    playerName,
    date,
    slot,
    courtName: court.name
  };

  bookings.push(newBooking);

  return res.status(201).json(newBooking);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
