// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

// Middleware for token handling and authentication
exports.authenticateToken = (req, res, next) => {
  // Retrieve the JWT token from the authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify the JWT token
  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.user = user;
    next();
  });
};
