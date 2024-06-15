const {Official} = require('../models/index');
const CrudRepository = require('./crud-repository');

class OfficialRepository extends CrudRepository{
   constructor(){
        super(Official);
   }
}

module.exports = OfficialRepository;
