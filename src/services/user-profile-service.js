const userProfileRepository = require('../repository/user-profile-repository');

class UserProfileService {
  async createUserProfile(profileData) {
    try {
      return await userProfileRepository.create(profileData);
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async getUserProfileById(id) {
    try {
      const profile = await userProfileRepository.get(id);
      if (!profile) {
        throw new Error('UserProfile not found');
      }
      return profile;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }
  
  async getUserProfileByEmail(email) {
    console.log(email);
    try {
      const profile = await userProfileRepository.get(email);
      console.log("user profile:",profile);
      if (!profile) {
        throw new Error('UserProfile not found');
      }
      return profile;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async updateUserProfile(id, updateData) {
    try {
      const profile = await userProfileRepository.update(id, updateData);
      if (!profile) {
        throw new Error('UserProfile not found');
      }
      return profile;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async deleteUserProfile(id) {
    try {
      const profile = await userProfileRepository.destroy(id);
      if (!profile) {
        throw new Error('UserProfile not found');
      }
      return profile;
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async getAllUserProfiles() {
    try {
      return await userProfileRepository.getAll();
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }
}

module.exports = UserProfileService;
