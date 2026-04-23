// ============================================================
// app.js — The heart of the KulimaTech backend
// This file creates and configures the Express application.
// It does NOT start the server — that's server.js's job.
// Separating them makes testing easier later.
// ============================================================

// 'require' is Node.js's way of importing a library
// Think of it like Python's 'import' or Java's 'import'
const express = require('express');
const cors = require('cors');

// Create the Express application
// This 'app' object is what we attach all our routes to
const app = express();

// ---- MIDDLEWARE SETUP ----
// Middleware runs on EVERY request before it reaches your routes.
// Think of it as a security checkpoint at a farm gate.

// cors() allows requests from other origins (e.g., your React frontend)
// Without this, browsers block requests from different ports/domains
app.use(cors());

// express.json() tells Express to automatically parse incoming
// JSON request bodies. Without this, req.body would be undefined
// when a GPS device sends: { "lat": -22.5, "lng": 17.0, "temp": 38.5 }
app.use(express.json());

// ---- HEALTH CHECK ROUTE ----
// This is the simplest possible route — it just confirms the server is alive.
// Convention: GET /health is a standard way to check if an API is running.
// Your monitoring tools, and you, can hit this to verify the system is up.
app.get('/health', (req, res) => {
  // req = the incoming request (what was asked)
  // res = the response we send back
  res.status(200).json({
    status: 'ok',
    message: 'KulimaTech API is running',
    timestamp: new Date().toISOString() // ISO format: "2025-04-22T10:30:00.000Z"
  });
});

// Export the app so server.js can use it
module.exports = app;