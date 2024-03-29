const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
  
    if (!username || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Check if user exists
    const userExists = await User.findOne({ username })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
  
    // Create user
    const user = await User.create({
      username,
      password: hashedPassword,
    })
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })

const loginUser = asyncHandler(async(req,res) => {
    const {username, password} = req.body

    //check for the username
    const user= await User.findOne({username})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id),
        })
    }else {
        res.status(400)
        throw new Error('Invalid Credentials')
      }
    
}
)
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
  })

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

const getUsers = asyncHandler(async(req,res)=>{
    const users = await User.find()
    res.status(200).json(users)
})

module.exports = {registerUser,loginUser,getUser,getUsers}