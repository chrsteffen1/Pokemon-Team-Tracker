import mongoose from 'mongoose'

const Schema = mongoose.Schema

const logSchema = new Schema({
  content: String,
  gym: {
    type: Number,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', 'E4']
  },
}, {
  timestamps: true
})


const gameSchema = new Schema({
  title:{
    type: String,
    required: true,
  } ,
  gameStyle: {
    type: String,
    enum: ['Standard', 'Nuzlcke', 'Randomized']
  },
  pokemon: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}],
  logs: [logSchema],
}, {
  timestamps: true
})

const Game = mongoose.model('Game', gameSchema)

export {
  Game
}