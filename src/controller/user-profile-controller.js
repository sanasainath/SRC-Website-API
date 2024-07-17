const UserProfileService = require('../services/user-profile-service'); // Importing as instance, not a class
const { StatusCodes } = require('http-status-codes'); 
const userProfileService=new UserProfileService();

class UserProfileController {
  async getAllUserProfiles(req, res) {
    try {
      const profiles = await userProfileService.getAllUserProfiles();
      res.status(200).json(profiles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserProfileById(req, res) {
    try {
      const profile = await userProfileService.getUserProfileById(req.params.id);
      if (!profile) return res.status(404).json({ message: 'UserProfile not found' });
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
async getUserProfileByEmail(req, res, next) {
  
  try {
    const email = req.params.email;
    console.log("user profile controller:",email);
    const user = await userProfileService.getUserProfileByEmail(email);
    console.log("user profile schema controller:",user);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    }
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
}
  async createUserProfile(req, res) {
    try {
      const profile = await userProfileService.createUserProfile(req.body);
      res.status(201).json(profile);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateUserProfile(req, res) {
    try {
      const profile = await userProfileService.updateUserProfile(req.params.id, req.body);
      if (!profile) return res.status(404).json({ message: 'UserProfile not found' });
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteUserProfile(req, res) {
    try {
      const profile = await userProfileService.deleteUserProfile(req.params.id);
      if (!profile) return res.status(404).json({ message: 'UserProfile not found' });
      res.status(200).json({ message: 'UserProfile deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserProfileController();
