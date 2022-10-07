import mongoose from 'mongoose'

const Schema = mongoose.Schema



const logSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  gym: {
    type: String,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', 'E4']
  },
}, {
  timestamps: true
})

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true 
  },
  alive: Boolean
  }, {
    timestamps: true,
  })

  const gameSchema = new Schema({
    title:{
      type: String,
      required: true,
    } ,
    gameStyle: {
      type: String,
      enum: ['Standard', 'Nuzlocke', 'Randomized']
    },
    pokemon: [pokemonSchema],
    logs: [logSchema],
  }, {
    timestamps: true
  })


const profileSchema = new Schema({
  name: String,
  avatar: String,
  games: [gameSchema],
}, {
  timestamps: true
})



const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
