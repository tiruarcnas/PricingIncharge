const mongoose =require('mongoose');
const createorderschema = mongoose.Schema({
    
ProductName:{
    type:String,
    required:true
},
CASNumber: {
    type:String,
    required:true
},
Brand: {
    type:String,
    required:true
},
CatalogueNumber:{
    type:String,
    required:true
},
PackSize: {
    type:Number,
    required:true
},
OrderQuantity: {
    type:Number,
    required:true
},
ImportanceType:{
    type:String,
    required:true
},
ProductType:{
    type:String,
    required:true
},
VendorName:{
    type:String,
    required:true
},
AddComments:{
    type:String,
    required:true
},


Status: {
    type:String,
    //default: 'Pending'
}


})
const createorder = module.exports =mongoose.model('createorder',createorderschema);