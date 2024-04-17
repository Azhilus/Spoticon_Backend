// models/token.js

const mongoose = require('mongoose');

// Define the schema for storing user tokens
const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});

module.exports = mongoose.model('Token', tokenSchema);
