const express = require('express');
const path = require('path');
const router = express.Router();
const clubsRouter = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
uuidv4();



//to st how its gonna be stored
const storage = multer.diskStorage({
    destination : function(req, file, callback){
        callback(null,'uploads/');
 
}, 
   filename: function(req, file, callback){
    var imageUrl = file.fieldname + '-' + Date.now()+'.jpg';
    callback(null, imageUrl);
 }
});

const upload = multer({storage: storage}); //its a folder where multer is gonna install the files
//it has to be a static folder

let Event= require('../models/event.model');

//attach the endpoints
router.get('/', (req, res, next) => {
    Event.find(function(err,events){
        if (err){
            console.log(err);
        }
        else{
            res.json(events);
        }
    });
});


router.get('/:id', (req, res, next) => {
    let id=req.params.id;
    Event.findById(id,function(err,event){
        if (err){
            console.log(err);
        }
        else{
            res.json(event);
        }
    });
});


router.post('/add', upload.single('image'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const Events = new Event({
        _id: new mongoose.Types.ObjectId(),
         title: req.body.title,
         dsc: req.body.dsc,
         start: req.body.start,
         end: req.body.end,
        image: url + '/uploads/' + req.file.filename
    });
    Events.save().then(result => {
        res.status(201).json({
            message: "event registered successfully!",
            clubsCreated: {
                _id: result._id,
                image: result.image
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})


router.post('/update/:id', (req, res, next) => {
    Event.findById(req.params.id, function(err, event){
        if(!event)
        res.status(404).send('not found');
        else
        {
            event.title= req.body.title;
            event.category=req.body.category;
            event.image=req.body.image;
            event.dsc=req.body.dsc;
            event.start=req.body.start;
            event.end=req.body.end;
            event.save().then(event=>{
                res.json('event updated');
            })
            .catch(err=>{
                res.status(400).send("update not possible");
            });
        }
    }); 
});


router.post('/searchevent', (req,res) => {
    const { title } = req.body;
    console.log(title)
    Event.find({ title:title })
      .then(foundsearch => {
        if(foundsearch.length > 0){
          console.log(foundsearch[0])
          res.json(foundsearch[0])
        }else{
          console.log('error')
          res.json('error')
        }
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  });

router.delete('/delete', (req,res) => {
    const title1 = req.body.title ; 
    const _id1 = req.body.id;
    const description1= req.body.dsc;

    if (title1)
    {
  Club.deleteOne({ title : title1}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
else 
if (_id1)
    {
  Club.deleteOne({ _id : _id1}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
else 
if (description1)
    {
  Club.deleteOne({ dsc : description1}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}
});

module.exports = router;