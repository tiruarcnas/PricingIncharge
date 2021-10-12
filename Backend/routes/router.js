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
  profile.save(function (err) {
    if (err) {
      //console.log(profile);
      console.log(err);
      res.json({ msg: 'failed' });
    } else {
      res.json(profile);
    }
  });
});
// GET ALL users
router.get('/profileget', function (req, res) {
  let users = Profile.find({}, function (err, users) {
    if (err) {
      console.log(err);
      res.json({ msg: 'failed' });
    } else {
      res.json(users);
    }
  });
});
// GET SINGLE user
router.get('/profileget/:id', function (req, res) {
  Profile.findById(req.params.id, function (err, user) {
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
  createorder.save(function (err) {
    if (err) {
      //console.log(createorder);
      console.log(err);
      res.json({ msg: 'failed' });
    } else {
      res.json(createorder);
    }
  });
});




// GET order  ALL 
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
    

// GET saved ALL 
router.get('/savedorderget', function(req, res){
    SavedOrder.find({}, function(err, savedorder){
       if(err){
           console.log(err);
           res.json({msg: "failed"})
       }
       else {
           res.json(savedorder);
       }
   })
});


// GET SINGLE savedorder
router.get('/singleorderget/:id', function(req, res){

    let query = { _id: req.params.id }
    SavedOrder.findById(query, function(err, user1){
        res.json(user1);
    });
});

// DELETE user
router.post('/saved/delete/:id', function (req, res) {
  let query = { _id: req.params.id };

  SavedOrder.findByIdAndDelete(query, function (err) {
    if (err) {
      console.log(err);
      res.json({ msg: 'failed' });
      return;
    } else {
      res.json({ msg: 'success' });
    }
  });
});

// UPDATE user
router.post('/update/:id', function (req, res) {
    let query = { _id: req.params.id }
    SavedOrder.findById(query, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.ProductName = req.body.ProductName;
            user.CASNumber = req.body.CASNumber;
            user.Brand = req.body.Brand;
            user.CatalogueNumber = req.body.CatalogueNumber;
            user.PackSize = req.body.PackSize;
            user.OrderQuantity = req.body.OrderQuantity;
            user.ImportanceType = req.body.ImportanceType;
            user.ProductType = req.body.ProductType;
            user.VendorName = req.body.VendorName;
            user.AddComments = req.body.AddComments;
            //user.Status = req.body.Status;
                    
            user.save().then(user => {
               // res.json({msg: "success"})

               SavedOrder.findOne({_id: req.params.id })
               .then(doc => {
                   console.log(doc);
             
                   // Inserting the doc in destination collection
                   CreateOrder.insertMany([doc])
                       .then(d => {
                           console.log("Saved Successfully");
                       })
                       .catch(error => {
                           console.log(error);
                       })
             
                   // Removing doc from the source collection
                   SavedOrder.deleteOne({ _id: doc._id })
                       .then(d => {
                           console.log("Removed succesfully")
                       })
                       .catch(error => {
                           console.log(error);
                       });
               })
               .catch(error => {
                   console.log(error);
           })
           

            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

module.exports = router;
