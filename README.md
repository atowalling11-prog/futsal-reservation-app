# Futsal Reservation App

A full-stack app for booking futsal courts from both web and mobile apps, using a Node.js backend.

## Overview

This project includes:

- Backend API with Express
- Responsive React web app
- React Native mobile app for iOS and Android
- Court listing and booking flow
- Booking validation and availability checks

## Stack

- Backend: Node.js, Express
- Web: React + Vite
- Mobile: React Native + Expo
- Data: in-memory JSON-style sample data for initial development

## Project structure

```text
apps/
  server/
    src/
      data.js
      index.js
  web/
    src/
      App.jsx
      styles.css
    index.html
    package.json
    vite.config.js
  mobile/
    App.js
    app.json
    package.json
```

## Setup

From the repo root:

```bash
npm install
```

Start the backend:

```bash
npm run dev:server
```

Start the web app:

```bash
npm run dev:web
```

Start the mobile app:

```bash
npm run dev:mobile
```

## Example API endpoints

- GET `/api/health`
- GET `/api/courts`
- GET `/api/courts/:id`
- GET `/api/bookings`
- POST `/api/bookings`

## Example booking payload

```json
{
  "courtId": 1,
  "playerName": "Aisha",
  "date": "2026-10-06",
  "slot": "18:00"
}
```

## Roadmap

- Add user auth and roles
- Add database persistence with MongoDB/PostgreSQL
- Add payment flow
- Add admin dashboard
- Add notifications and real-time availability
