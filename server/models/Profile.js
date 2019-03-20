const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: String,
  bio: String,
  profilePic: String,
})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;