const mongoose=require("mongoose")

const userSchema=mongoose.Schema(
    {
        email: String,
        message: String,
    }
)

const userModel2=mongoose.model('message',userSchema)

module.exports=userModel2