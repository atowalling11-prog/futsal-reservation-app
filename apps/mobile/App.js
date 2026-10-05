* {
  box-sizing: border-box;
}

:root {
  color: #f8fafc;
  background: #081c2d;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #071b2f 0%, #0b1f36 100%);
  min-height: 100vh;
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 18px 64px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.eyebrow {
  letter-spacing: 0.18em;
  color: #7dd3fc;
  margin: 0 0 8px;
  font-size: 12px;
}

h1, h2, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 0;
}

.stat-pill {
  background: rgba(34, 197, 94, 0.1);
  color: #bbf7d0;
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 600;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 22px;
}

.panel {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 18px 40px rgba(11, 15, 26, 0.25);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  color: #cbd5e1;
}

.court-list {
  display: grid;
  gap: 12px;
}

.court-card {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 16px;
  border-radius: 14px;
  background: rgba(15, 118, 110, 0.12);
  border: 1px solid rgba(45, 212, 191, 0.14);
}

.court-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.tag {
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.18);
  color: #bfdbfe;
  font-size: 11px;
}

.court-card p,
.court-card small {
  color: #cbd5e1;
}

.court-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  min-width: 110px;
}

.court-meta span {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fef3c7;
}

.court-meta button {
  border: none;
  border-radius: 10px;
  background: #38bdf8;
  color: #082f49;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.booking-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #e2e8f0;
}

.booking-form input,
.booking-form select {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.38);
  border-radius: 10px;
  color: #fff;
  padding: 12px 14px;
}

.primary-btn {
  margin-top: 8px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  padding: 14px 16px;
  cursor: pointer;
}

.message {
  margin: 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(34, 197, 94, 0.12);
  color: #bbf7d0;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.lower-panel {
  margin-top: 24px;
}

.booking-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.booking-list li {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 0.8fr 0.7fr;
  gap: 10px;
  align-items: center;
  background: rgba(15, 118, 110, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.12);
  border-radius: 12px;
  padding: 12px 14px;
}

.status {
  display: inline-flex;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
}

.status.confirmed {
  background: rgba(34, 197, 94, 0.12);
  color: #bbf7d0;
}

.status.pending {
  background: rgba(250, 204, 21, 0.12);
  color: #fef3c7;
}

@media (max-width: 800px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .topbar,
  .panel-header,
  .court-card {
    display: block;
  }

  .court-card {
    padding: 14px;
  }

  .court-meta {
    align-items: flex-start;
    margin-top: 12px;
  }

  .booking-list li {
    display: block;
    line-height: 1.8;
  }
}
