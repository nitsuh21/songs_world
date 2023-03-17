const mongoose = require('mongoose')

const songSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        title:{
            type:String,
            required:[true,'Please add a text value']
        },
        artist:{
            type:String,
        },
        album:{
            type:String,
        },
        genre:{
            type:String,
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Song',songSchema)