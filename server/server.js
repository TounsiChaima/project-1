const express = require('express');
const app= express();
const bodyParser= require ('body-parser');
const cors= require ('cors');
const mongoose = require ('mongoose');
const eventRoutes= express.Router();
const multer = require('multer');




require('dotenv').config();


app.use (cors());
app.use('uploads/', express.static('uploads'));
app.use(express.static(__dirname + '/uploads'));
app.use (bodyParser.json());
const event = require('./routes/events');

 
mongoose.connect('mongodb+srv://yesmine:MNWYgtOnimouGrTI@cluster0-floby.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection; 
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const clubs = require('./routes/clubs');
app.use('/clubs',clubs);

const events = require('./routes/events');
app.use('/events',events);



const port = process.env.PORT || 5000 ; 
  app.listen(port,  () => {
    console.log(`server is running on port: ${port}`);
     });


