const express = require('express');

// Initialize app
const router = express.Router();
// Load models
const Profile = require('../models/Profile');

// ADD user
router.post('/profile', function (req, res) {

    let profile = new Profile();
    profile.FirstName = req.body.FirstName;
    profile.LastName = req.body.LastName;
    profile.EmployeeId = req.body.EmployeeId;
    profile.Designation = req.body.Designation;
    profile.Email = req.body.Email;
    profile.PhoneNumber = req.body.PhoneNumber;
    profile.ReportingTo = req.body.ReportingTo;
    profile.Wing = req.body.Wing;
    profile.HQLocation = req.body.HQLocation;
    profile.HQAddress = req.body.HQAddress;
    profile.BloodGroup = req.body.BloodGroup;
    profile.save(function(err){
        if(err){
            console.log(profile);
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(profile);
        }
    });
});
// GET ALL users
router.get('/profileget', function(req, res){
    let users = Profile.find({}, function(err, users){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            res.json(users);
        }
    })
});
// GET SINGLE user
router.get('/profileget/:id', function(req, res){
    Profile.findById(req.params.id, function(err, user){
        res.json(user);
    });
});

module.exports = router;