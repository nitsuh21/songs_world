const asyncHandler = require('express-async-handler')

const Song = require('../models/songModel')

const getSongs = asyncHandler(async(req,res)=>{
    const songs = await Song.find({user:req.user.id})
    res.status(200).json(songs)
})

const addSong = asyncHandler(async(req,res)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error('please add the song name')
    }
    
    const song = await Song.create({
        title: req.body.title,
        album: req.body.album,
        artist: req.body.artist,
        genre: req.body.genre,
        user:req.user.id
    })

    res.status(200).json(song)
})

const updateSong = asyncHandler(async(req,res)=>{
    const song = await Song.findById(req.params.id)
    if(!song){
        res.status(400)
        throw new Error('Song not found')
    }
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('user not found')
    }

    if(song.user.toString() !== user.id){
        res.status(401)
        throw new Error('User is not Authorised')
    }
    const updateSong = await Song.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateSong)
})

const deleteSong = asyncHandler(async(req,res)=>{
    const song = await Song.findById(req.params.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }

    if(song.user.toString() !== user.id){
        res.status(401)
        throw new Error('User is not Authorised')
    }
    if(!song){
        res.status(400)
        throw new Error('Song not found')
    }
    await goal.remove()
    res.status(200).json({message:`delete song ${req.params.title}`})
})

module.exports = {getSongs,addSong,updateSong,deleteSong}