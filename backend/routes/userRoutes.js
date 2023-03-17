const express = require('express')
const router = express.Router()

const {registerUser,loginUser,getUser,getUsers} = require('../controllers/userControllers')
const {protect} = require('../middlewares/authMiddleware')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.get('/getuser',protect,getUser)
router.route('/').get(getUsers)

module.exports = router