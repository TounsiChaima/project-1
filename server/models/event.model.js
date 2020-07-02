const mongoose=require('mongoose');
const schema = mongoose.Schema;

let Event=new schema({
    title:{
        type: String
    },
    dsc:{
        type:
        String
    },
    image:{
        type: String
    },
    category:{
        type:String
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    }
});

module.exports=mongoose.model('Event', Event); 
//above we actually created the model