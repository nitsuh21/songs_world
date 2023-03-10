const asyncHandler = require('express-async-handler')

const getSongs = asyncHandler(async(req,res)=>{
    if(!req.body.name){
        res.status(400)
        throw new Error('please and the song name')
    }
    res.status(200).json({message:'Get songs'})
})

const addSong = asyncHandler(async(req,res)=>{
    console.log(req.body)
    res.status(200).json({message:'Add song'})
})

const updateSong = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`edit song ${req.params.id}`})
})

const deleteSong = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete song ${req.params.id}`})
})

module.exports = {getSongs,addSong,updateSong,deleteSong}