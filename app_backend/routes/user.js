const router = require("express").Router();
const User = require("../models/User");
const Song = require("../models/Song");

router.patch("/:userId/:songId", async (req, res) => {
    try {
      const { userId, songId } = req.params
      const user = await User.findById(userId)
      const listing = await Song.findOne({_id: songId}).populate({
        path: "songs",
         populate:{
           path:"artist",
       }
   });
  
      const likedSong = user.likedPlaylists.find((item) => item._id.toString() === songId)
  
      if (likedSong) {
        user.likedPlaylists = user.likedPlaylists.filter((item) => item._id.toString() !== songId)
        await user.save()
        res.status(200).json({ message: "Song is removed from Liked list", likedPlaylists: user.likedPlaylists})
      } else {
        user.likedPlaylists.push(listing)
        await user.save()
        res.status(200).json({ message: "Song is added to Liked list", likedPlaylists: user.likedPlaylists})
      }
    } catch (err) {
      console.log(err)
      res.status(404).json({ error: err.message })
    }
  })

  module.exports = router;