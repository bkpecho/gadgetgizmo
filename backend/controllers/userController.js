import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Login user & Get token
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('login user');
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc Logout user & Clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc Get users
// @route GET /api/users
// @access Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private / Admin
const getUsersByID = asyncHandler(async (req, res) => {
  res.send('get user by ID');
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private / Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUsersByID,
  updateUser,
  deleteUser
};
