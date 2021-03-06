'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const portfolioSchema = new Schema({
    Email: { type: String, required: true, unique: true},
    UserPhoto: {type: String, required: true},
    //using the user id that mongo provided
    User_ID: { type: String, required: true, unique: true},
    AboutBlurb: { type:String, required: false},
    Facebook: { type:String, required: false},
    Twitter: { type:String, required: false},
    // Icon: { data: Buffer, contentType: String},
    Icon: { type:String, required: true},
    Website: { type:String },
    SkillsArray: {type:Object, required: true},
    PhoneNumber: { type:String, required: false},
    Projects: { type:[{link:String, ss:String}], required: false},
    Theme: { type: String, required: false}
}); 

module.exports = mongoose.model('USER_PORTFOLIO', portfolioSchema);
