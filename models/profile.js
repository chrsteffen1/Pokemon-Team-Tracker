import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema({
  title:{
    type: String,
    require: true,
  } ,
  gameStyle: {
    type: String,
    enum: ['Standard', 'Nuzlcke', 'Randomized']
  },
  gym: {
    type: Number,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', 'E4']
  },
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  games: [gameSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
