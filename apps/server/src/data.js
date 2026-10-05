const courts = [
  {
    id: 1,
    name: 'Court A',
    type: 'Indoor',
    location: 'Central Arena',
    price: 120,
    image: 'https://images.unsplash.com/...',
    slots: ['09:00', '10:00', '11:00', '12:00', '18:00', '19:00']
  },
  {
    id: 2,
    name: 'Court B',
    type: 'Indoor',
    location: 'Central Arena',
    price: 140,
    image: 'https://images.unsplash.com/...',
    slots: ['10:00', '11:30', '14:00', '17:00', '20:00']
  },
  {
    id: 3,
    name: 'Court C',
    type: 'Outdoor',
    location: 'Green Valley',
    price: 160,
    image: 'https://images.unsplash.com/...',
    slots: ['08:00', '13:00', '17:30', '19:00']
  }
];

const bookings = [
  {
    id: 1,
    courtId: 1,
    courtName: 'Court A',
    playerName: 'Aisha',
    date: '2026-10-06',
    slot: '18:00',
    status: 'confirmed'
  },
  {
    id: 2,
    courtId: 2,
    courtName: 'Court B',
    playerName: 'Samuel',
    date: '2026-10-07',
    slot: '17:00',
    status: 'pending'
  }
];

module.exports = {
  courts,
  bookings
};
