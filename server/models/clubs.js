const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

let Club = new Schema({

    clubImg: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    goals:{type:String},
    themes:{type:String},
    community:{type:String},
    sponsors : {type:Array, required: false},
    eventclub: {type: mongoose.Schema.Types.ObjectId,ref: "Event" , required: false},
    teamclub:{type: mongoose.Schema.Types.ObjectId,ref: "Team" , required: false},
    facebooklink:{type:String},
    linkedinlink:{type:String},
    instagramlink:{type:String}
    },
   
    { timestamps: true },
 {collection: 'Club'});


module.exports =mongoose.model('Club', Club)
