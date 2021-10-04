const mongoose =require('mongoose');
const createorderschema = mongoose.Schema({
    
ProductName:{
    type:String,
    require:true
},


})
const createorder = modules.exports =mongoose.model('createorder',createorderschema);