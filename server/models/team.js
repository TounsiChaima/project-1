const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

let Team = new Schema({

          name: {type:String},
          facebooklink : {type: String},
          memberimage:{type:String}

         }
    ,
   
    { timestamps: true },
 {collection: 'Team'});


module.exports =mongoose.model('Team', Team)