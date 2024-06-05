const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');

exports.SignIn = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role } = req.body;

    // Find the user based on the provided email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatches = await user.authenticate(password);
    if (passwordMatches) {
      // Check if the provided role matches the role stored in the database
      if (user.role === role) {
        const token = jwt.sign(
          { userId: user._id, role: user.role, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: '10h' }
        );

        return res.status(200).json({
          token: token,
          expiresIn: 36000 // Expiration time in seconds (10 hours)
        });
      } else {
        return res.status(401).json({ message: 'Invalid role' });
      }
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    // Handle any errors that occur during the query
    console.error('Error occurred:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.SignUp = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email }).exec();
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const { username, email, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const user = new User({
      username,
      email,
      password: hashedPassword, // Save the hashed password
      role
    });

    await user.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle any errors that occur during the query or save operation
    console.error('Error occurred:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
