const mongoose =require('mongoose');
const profileschema = mongoose.Schema({
    FirstName:{
        type: String,
        required:true
    },
    LastName:{
        type:String,
        require:true
    },
    EmployeeId:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Email:
    {
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    ReportingTo:{
        type:String,
        required:true
    },
    Wing:{
        type:String,
        required:true
    },
    HQLocation:
    {
        type:String,
        required:true
    },
    HQAddress:
    {
        type:String,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true
    }

});
const profile = module.exports = mongoose.model('profile', profileschema);