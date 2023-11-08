const mongoose=require("mongoose");

const Students=new mongoose.Schema({
   
    
   name: { type: String, lowercase: true, trim: true },

    
    email:{
        type:String,Number,
        lowercase: true,
      
    },
})



const Register = new mongoose.model("Usersdata", Students,)
    // Error handler function
   
  
  module.exports = Register;


 