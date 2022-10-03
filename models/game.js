import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const logSchema = new Schema({
//   content: String,
// }, {
//   timestamps: true
// })

const gameSchema = new Schema({
  title: String,
  gameStyle: {
    type: String,
    enum: ['Standard', 'Nuzlcke', 'Randomized']
  },
  gym: {
    type: Number,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', 'E4']
  },
  // pokemon: [{type: Schema.Types.ObjectId, ref : 'Pokemon'}],
  // log: [logSchema],
}, {
  timestamps: true
})

const Game = mongoose.model('game', gameSchema)

export {
  Game
}