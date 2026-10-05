# Futsal Reservation App

A full-stack app for booking futsal courts from both web and mobile interfaces, powered by a Node.js API.

## Features

- View available futsal courts
- Reserve a time slot
- Manage bookings
- Mobile-friendly responsive web app
- React Native app for iOS/Android
- Simple backend API with in-memory data storage

## Tech stack

- Backend: Node.js + Express
- Web: React + Vite
- Mobile: React Native + Expo
- Shared concept: REST API contract and booking model

## Project structure

```text
.
├── apps
│   ├── mobile
│   ├── server
│   └── web
├── README.md
├── package.json
└── .gitignore
```

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the API server:

```bash
npm run dev:server
```

3. Start the web app:

```bash
npm run dev:web
```

4. Start the mobile app:

```bash
npm run dev:mobile
```

## API endpoints

- GET `/api/health`
- GET `/api/courts`
- GET `/api/bookings`
- POST `/api/bookings`

## Notes

This is the initial app scaffold and can be extended with:

- User authentication
- Payment integration
- Admin dashboard
- Database (MongoDB/PostgreSQL)
- Push notifications
- Real-time availability updates
