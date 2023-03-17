const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username : {
            type:String,
            required:[true,'please add username']
        },
        password:{
            type:String,
            required:[true,'please add password']
        }
    }
)

module.exports = mongoose.model('User',userSchema)