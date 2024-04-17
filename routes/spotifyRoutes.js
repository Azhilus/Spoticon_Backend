// routes/spotifyRoutes.js

const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotifyController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get currently playing track
router.get('/currently-playing', authMiddleware.authenticateToken, spotifyController.getCurrentlyPlaying);

// Route to search for tracks, albums, artists, or playlists
router.get('/search', authMiddleware.authenticateToken, spotifyController.search);

// Route to get a track by ID
router.get('/tracks/:id', authMiddleware.authenticateToken, spotifyController.getTrack);

// Route to get an album by ID
router.get('/albums/:id', authMiddleware.authenticateToken, spotifyController.getAlbum);

// Route to get an artist by ID
router.get('/artists/:id', authMiddleware.authenticateToken, spotifyController.getArtist);

// Route to get a playlist by ID
router.get('/playlists/:id', authMiddleware.authenticateToken, spotifyController.getPlaylist);

// Route to get audio analysis for a track by ID
router.get('/audio-analysis/:id', authMiddleware.authenticateToken, spotifyController.getAudioAnalysis);

// Route to get audio features for a track by ID
router.get('/audio-features/:id', authMiddleware.authenticateToken, spotifyController.getAudioFeatures);

// Route to get recommendations
router.get('/recommendations', authMiddleware.authenticateToken, spotifyController.getRecommendations);

// Route to control playback: play, pause, next, previous
router.post('/player/play', authMiddleware.authenticateToken, spotifyController.play);
router.post('/player/pause', authMiddleware.authenticateToken, spotifyController.pause);
router.post('/player/next', authMiddleware.authenticateToken, spotifyController.next);
router.post('/player/previous', authMiddleware.authenticateToken, spotifyController.previous);

// Route to control playback: shuffle, repeat
router.put('/player/shuffle', authMiddleware.authenticateToken, spotifyController.shuffle);
router.put('/player/repeat', authMiddleware.authenticateToken, spotifyController.repeat);

// Route to control playback: seek, volume
router.put('/player/seek', authMiddleware.authenticateToken, spotifyController.seek);
router.put('/player/volume', authMiddleware.authenticateToken, spotifyController.volume);

module.exports = router;
