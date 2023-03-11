const mongoose = require('mongoose')

const songSchema = mongoose.Schema(
    {
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