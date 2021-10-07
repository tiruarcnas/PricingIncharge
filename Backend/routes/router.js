const express = require('express');

// Initialize app
const router = express.Router();
// Load models
const Profile = require('../models/Profile');
const CreateOrder = require('../models/CreateOrder');
const SavedOrder = require('../models/SavedOrder');

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
            //console.log(profile);
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

// Create Orders
router.post('/order', function (req, res) {
//const CreateOrder = require('../models/CreateOrder');
let createorder = new CreateOrder();
createorder.ProductName = req.body.ProductName;
createorder.CASNumber = req.body.CASNumber;
createorder.Brand = req.body.Brand;
createorder.CatalogueNumber = req.body.CatalogueNumber;
createorder.PackSize = req.body.PackSize;
createorder.OrderQuantity = req.body.OrderQuantity;
createorder.ImportanceType = req.body.ImportanceType;
createorder.ProductType = req.body.ProductType;
createorder.VendorName = req.body.VendorName;
createorder.AddComments = req.body.AddComments;
createorder.Status = req.body.Status;
createorder.save(function(err){
        if(err){
            //console.log(createorder);
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(createorder);
        }
    });
});



// Saved Orders
router.post('/savedorder', function (req, res) {
    //const CreateOrder = require('../models/CreateOrder');
    let savedorder = new SavedOrder();
    savedorder.ProductName = req.body.ProductName;
    savedorder.CASNumber = req.body.CASNumber;
    savedorder.Brand = req.body.Brand;
    savedorder.CatalogueNumber = req.body.CatalogueNumber;
    savedorder.PackSize = req.body.PackSize;
    savedorder.OrderQuantity = req.body.OrderQuantity;
    savedorder.ImportanceType = req.body.ImportanceType;
    savedorder.ProductType = req.body.ProductType;
    savedorder.VendorName = req.body.VendorName;
    savedorder.AddComments = req.body.AddComments;
    savedorder.Status = req.body.Status;
    savedorder.save(function(err){
            if(err){
                //console.log(createorder);
                console.log(err);
                res.json({msg: "failed"})
            }
            else{
                res.json(savedorder);
            }
        });
    });
    


// GET ALL 
router.get('/orderget', function(req, res){
     CreateOrder.find({}, function(err, order){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            res.json(order);
        }
    })
});




// UPDATE user
router.post('/update/:id', function (req, res) {

    Profile.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.FirstName = req.body.FirstName;
            user.LastName = req.body.LastName;
            user.EmployeeId = req.body.EmployeeId;
            user.Designation = req.body.Designation;
            user.Email = req.body.Email;
            user.PhoneNumber = req.body.PhoneNumber;
            user.ReportingTo = req.body.ReportingTo;
            user.Wing = req.body.Wing;
            user.HQLocation = req.body.HQLocation;
            user.HQAddress = req.body.HQAddress;
            user.BloodGroup = req.body.BloodGroup;
            
            user.save().then(user => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});


module.exports = router;