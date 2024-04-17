// services/spotifyService.js

const axios = require('axios');
const qs = require('qs');
const { clientId, clientSecret, redirectUri } = require('../config/spotify');
const Token = require('../models/Token');

// Service for interacting with the Spotify API
exports.refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, expires_in } = response.data;
    return { accessToken: access_token, expiresIn: expires_in };
  } catch (error) {
    throw error;
  }
};

exports.getAccessToken = async (code) => {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, refresh_token, expires_in } = response.data;
    return { accessToken: access_token, refreshToken: refresh_token, expiresIn: expires_in };
  } catch (error) {
    throw error;
  }
};

exports.getUserProfile = async (accessToken) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
