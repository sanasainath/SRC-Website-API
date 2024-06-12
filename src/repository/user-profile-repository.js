const UserProfile = require('../models/user-profile-model');
const crudRepository = require('./crud-repository');

class UserProfileRepository extends crudRepository {
  constructor() {
    super(UserProfile);
  }
}

module.exports = new UserProfileRepository();
