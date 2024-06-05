const express = require('express');
const { check } = require('express-validator');
const { SignIn, SignUp } = require('../controller/user');

const router = express.Router();

router.post(
  '/signin',
  [
    check('email').isEmail().withMessage('Must be a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('role').isIn(['admin', 'user']).withMessage('Invalid role')
  ],
SignIn
);

router.post(
  '/signup',
  [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Must be a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('role').isIn(['admin', 'user']).withMessage('Invalid role')
  ],
  SignUp
);

module.exports = router;
