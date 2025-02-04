const mongoose=require("mongoose")

const userSchema=mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
        branch: String,
        domain: String,
        skills: [{type:String}],
    }
)

const userModel=mongoose.model('User',userSchema)

module.exports=userModel

// const connection = mongoose.connect('mongodb+srv://ritikb061805:FyYyIDkp5p6nUWUH@cybernautsmessagebox.zbtv8.mongodb.net/?retryWrites=true&w=majority&appName=cybernautsmessagebox')
