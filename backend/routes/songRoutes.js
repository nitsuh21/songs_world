const express = require('express')
const router = express.Router()
const {getSongs,addSong,updateSong,deleteSong} = require('../controllers/songControllers')

const {protect} = require('../middlewares/authMiddleware')
router.route('/').get(protect,getSongs).post(protect,addSong)

router.route('/:id').put(protect,updateSong).delete(protect,deleteSong)

module.exports = router