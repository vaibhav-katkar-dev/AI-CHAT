const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },

    prompts: [
        {
            input: {
                type: String,
                required: true, // Add this if you want to enforce required inputs
            },
            output: {
                type: String,
                required: true,
            }
        }
    ]
});
   


const User=new mongoose.model("User",userSchema);

module.exports=User;