const {Official} = require('../models/index');
const CrudRepository = require('./crud-repository');

class OfficialRepository extends CrudRepository{
   constructor(){
        super(Official);
   }
   async getUserByEmailAndDelete(email) {
      try {
          const deletedUser = await Official.findOneAndDelete({ email: email });
          if (!deletedUser) {
              console.log(`User with email ${email} not found.`);
              return null;
          }
          console.log(`User with email ${email} deleted successfully.`);
          return deletedUser;
      } catch (error) {
          console.error('Error deleting user:', error);
          throw error;
      }
  }
}

module.exports = OfficialRepository;
