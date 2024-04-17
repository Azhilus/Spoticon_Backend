// services/authService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Token = require('../models/Token');
const { jwtSecret } = require('../config');

// Service for user authentication
exports.signup = async (username, email, password) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return { message: 'User created successfully' };
  } catch (error) {
    throw error;
  }
};

exports.login = async (email, password) => {
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    return { token };
  } catch (error) {
    throw error;
  }
};
