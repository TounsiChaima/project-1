const express = require('express');
const clubsRouter = express.Router();
const Club = require('../models/clubs');
const multer = require('multer');
const mongoose = require('mongoose');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
uuidv4();



const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

let club = require('../models/clubs');
let Team = require('../models/team');


router.post('/addteam', upload.single('memberimage'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const Teams = new Team({
        _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         facebooklink: req.body.facebooklink,
        memberimage: url + '/uploads/' + req.file.filename
    });
    Teams.save().then(result => {
        res.status(201).json({
            message: "team registered successfully!",
            clubsCreated: {
                _id: result._id,
                memberimage: result.memberimage
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})



router.post('/add', upload.single('clubImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const Clubs = new Club({
        _id: new mongoose.Types.ObjectId(),
         title: req.body.title,
         description: req.body.description,
         sponsors: req.body.sponsors,
         linkedinlink:req.body.linkedinlink,
         facebooklink:req.body.facebooklink,
         goals:req.body.goals,
         themes:req.body.themes,
         community:req.body.community,
        clubImg: url + '/uploads/' + req.file.filename
    });
    Clubs.save().then(result => {
        res.status(201).json({
            message: "club registered successfully!",
            clubsCreated: {
                _id: result._id,
                clubImg: result.clubImg
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})


router.get('/fetch', (req, res, next) => {
         Club.find({title,description,clubImg})
         
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/fetchsponsors', (req, res, next) => {
         Club.find({sponsors})
         
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.get('/fetchTeam', (req, res, next) => {
         Club.find({teamclub})
         
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('fetchsocialmedia', (req, res, next) => {

 Club.find({linkedinlink,facebooklink,instagramlink})
         
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.post('/searchclub', (req,res) => {
    const { title } = req.body;
    console.log(title)
    Club.find({ title:title })
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



module.exports = router;