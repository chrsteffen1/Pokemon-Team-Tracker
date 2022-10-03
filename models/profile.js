import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema({
  title:{
    type: String,
    require: true,
  } ,
  gameStyle: {
    type: String,
    enum: ['Standard', 'Nuzlocke', 'Randomized']
  },
  gym: {
    type: Number,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', 'E4']
  },
}, {
  timestamps: true
})

const logSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const pokemonSchema = new Schema({
  name: String,
  alive: Boolean
  }, {
    timestamps: true,
  })

const profileSchema = new Schema({
  name: String,
  avatar: String,
  games: [gameSchema],
  pokemon: [pokemonSchema],
  log: [logSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
