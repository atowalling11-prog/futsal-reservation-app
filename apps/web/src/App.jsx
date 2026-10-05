import { useEffect, useMemo, useState } from 'react';

const API_URL = 'http://localhost:5000/api';

const initialForm = {
  courtId: '1',
  playerName: '',
  date: '2026-10-06',
  slot: '18:00'
};

export default function App() {
  const [courts, setCourts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

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

  const selectedCourt = useMemo(
    () => courts.find((court) => Number(court.id) === Number(form.courtId)) || courts[0],
    [courts, form.courtId]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, courtId: Number(form.courtId) })
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error || 'Booking failed');
      return;
    }

    setBookings((prev) => [data, ...prev]);
    setForm({ ...initialForm, courtId: form.courtId });
    setMessage(`Booking confirmed for ${data.courtName} at ${data.slot}`);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">BOOK A COURT</p>
          <h1>Futsal Reservation</h1>
        </div>
        <div className="stat-pill">{bookings.length} upcoming</div>
      </header>

      <main className="content-grid">
        <section className="panel">
          <div className="panel-header">
            <h2>Available Courts</h2>
            <span>{courts.length} courts</span>
          </div>

          <div className="court-list">
            {courts.map((court) => (
              <article key={court.id} className="court-card">
                <div>
                  <div className="court-title-row">
                    <strong>{court.name}</strong>
                    <span className="tag">{court.type}</span>
                  </div>
                  <p>{court.location}</p>
                  <small>{court.slots.join(' • ')}</small>
                </div>
                <div className="court-meta">
                  <span>${court.price}</span>
                  <button type="button" onClick={() => setForm((prev) => ({ ...prev, courtId: String(court.id) }))}>
                    Select
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel booking-panel">
          <div className="panel-header">
            <h2>Reserve a slot</h2>
            <span>{selectedCourt ? selectedCourt.name : 'Court'}</span>
          </div>

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
                placeholder="Enter your name"
              />
            </label>

            <label>
              Date
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </label>

            <label>
              Preferred time
              <select name="slot" value={form.slot} onChange={handleChange}>
                {selectedCourt?.slots?.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                )) || <option value="18:00">18:00</option>}
              </select>
            </label>

            <button type="submit" className="primary-btn">Confirm booking</button>
            {message ? <p className="message">{message}</p> : null}
          </form>
        </section>
      </main>

      <section className="panel lower-panel">
        <div className="panel-header">
          <h2>Recent bookings</h2>
          <span>Live snapshot</span>
        </div>

        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id}>
              <span>{booking.playerName}</span>
              <span>{booking.courtName}</span>
              <span>{booking.date}</span>
              <span>{booking.slot}</span>
              <span className={booking.status === 'confirmed' ? 'status confirmed' : 'status pending'}>
                {booking.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
