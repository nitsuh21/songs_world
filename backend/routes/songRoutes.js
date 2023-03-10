const express = require('express')
const router = express.Router()
const {getSongs,addSong,updateSong,deleteSong} = require('../controllers/songControllers')

router.route('/').get(getSongs).post(addSong)

router.route('/:id').put(updateSong).delete(deleteSong)

module.exports = router