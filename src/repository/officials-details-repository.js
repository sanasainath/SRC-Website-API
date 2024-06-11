const Official = require('../models/officials-details-model');
const CrudRepository = require('./crud-repository');

class OfficialRepository extends CrudRepository{
   constructor(){
        super(Official);
   }
}

module.exports = new OfficialRepository();
