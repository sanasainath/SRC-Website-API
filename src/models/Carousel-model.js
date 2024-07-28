const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carouselSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String,required:true },
    image:{type:String,required:true},
    domainId: { type: Schema.Types.ObjectId, ref: 'Domain'},
},{timestamps:true});

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
