// ============================================================
// server.js — The entry point. Starts the actual HTTP server.
// We import the configured app from app.js and tell it to
// listen on a port. Keeping this separate from app.js means
// we can import app in tests without starting a live server.
// ============================================================

// Load environment variables from .env file
// Must be called BEFORE anything else that uses process.env
require('dotenv').config();

const app = require('./app');

// process.env.PORT reads from your .env file
// The || 3000 means: "if PORT isn't set, use 3000"
// Port 3000 is the standard development port for Node apps
const PORT = process.env.PORT || 3000;

// Start the server — tell it to listen for incoming HTTP requests
app.listen(PORT, () => {
  // This callback runs once the server is ready
  console.log(`🌱 KulimaTech API running on port ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
});