import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api';

export default function App() {
  const [courts, setCourts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    courtId: '1',
    playerName: '',
    date: '2026-10-06',
    slot: '18:00'
  });

  useEffect(() => {
    fetch(`${API_URL}/courts`)
      .then((res) => res.json())
      .then(setCourts)
      .catch((err) => console.error('Failed to load courts', err));

    fetch(`${API_URL}/bookings`)
      .then((res) => res.json())
      .then(setBookings)
      .catch((err) => console.error('Failed to load bookings', err));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || 'Booking failed');
      return;
    }

    setBookings((prev) => [...prev, data]);
    alert('Booking successful');
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">FUTSAL</p>
          <h1>Reservation Hub</h1>
        </div>
      </header>

      <main className="content-grid">
        <section className="panel">
          <h2>Available Courts</h2>
          <div className="court-list">
            {courts.map((court) => (
              <article key={court.id} className="court-card">
                <div>
                  <strong>{court.name}</strong>
                  <p>{court.type}</p>
                </div>
                <div className="court-meta">
                  <span>From $ {court.price}</span>
                  <small>{court.slots.join(' • ')}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Book a Court</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <label>
              Court
              <select name="courtId" value={form.courtId} onChange={handleChange}>
                {courts.map((court) => (
                  <option key={court.id} value={court.id}>{court.name}</option>
                ))}
              </select>
            </label>

            <label>
              Player name
              <input
                name="playerName"
                value={form.playerName}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </label>

            <label>
              Date
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </label>

            <label>
              Slot
              <select name="slot" value={form.slot} onChange={handleChange}>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </label>

            <button type="submit">Confirm Booking</button>
          </form>
        </section>
      </main>

      <section className="panel lower-panel">
        <h2>Bookings</h2>
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id}>
              <span>{booking.playerName}</span>
              <span>{booking.courtName || `Court ${booking.courtId}`}</span>
              <span>{booking.date}</span>
              <span>{booking.slot}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
