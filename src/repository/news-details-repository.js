const News = require('../models/news');
const crudRepository=require('./crud-repository')
class NewsRepository  extends crudRepository{
    constructor() {
        super(News);
    }
 
}

module.exports = new NewsRepository();
