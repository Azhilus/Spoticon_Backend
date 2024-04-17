// controllers/spotifyController.js

const axios = require('axios');
const { clientId, clientSecret, redirectUri } = require('../config/spotify');

// Controller for interacting with Spotify API

exports.getCurrentlyPlaying = async (req, res) => {
  try {
    const accessToken = req.user.accessToken;

    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.search = async (req, res) => {
  try {
    const { query } = req.query;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track,album,artist,playlist`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPlaylist = async (req, res) => {
  try {
    const { id } = req.params;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAudioAnalysis = async (req, res) => {
  try {
    const { id } = req.params;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/audio-analysis/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAudioFeatures = async (req, res) => {
  try {
    const { id } = req.params;
    const accessToken = req.user.accessToken;

    const response = await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const accessToken = req.user.accessToken;

    const response = await axios.get('https://api.spotify.com/v1/recommendations', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.play = async (req, res) => {
  try {
    const { deviceId, uris } = req.body;
    const accessToken = req.user.accessToken;

    await axios.put(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, { uris }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.pause = async (req, res) => {
  try {
    const accessToken = req.user.accessToken;

    await axios.put('https://api.spotify.com/v1/me/player/pause', null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.next = async (req, res) => {
  try {
    const accessToken = req.user.accessToken;

    await axios.post('https://api.spotify.com/v1/me/player/next', null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.previous = async (req, res) => {
  try {
    const accessToken = req.user.accessToken;

    await axios.post('https://api.spotify.com/v1/me/player/previous', null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.shuffle = async (req, res) => {
  try {
    const { state } = req.body;
    const accessToken = req.user.accessToken;

    await axios.put(`https://api.spotify.com/v1/me/player/shuffle?state=${state}`, null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.repeat = async (req, res) => {
  try {
    const { state } = req.body;
    const accessToken = req.user.accessToken;

    await axios.put(`https://api.spotify.com/v1/me/player/repeat?state=${state}`, null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.seek = async (req, res) => {
  try {
    const { position_ms } = req.body;
    const accessToken = req.user.accessToken;

    await axios.put(`https://api.spotify.com/v1/me/player/seek?position_ms=${position_ms}`, null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.volume = async (req, res) => {
  try {
    const { volume_percent } = req.body;
    const accessToken = req.user.accessToken;

    await axios.put(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volume_percent}`, null, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
