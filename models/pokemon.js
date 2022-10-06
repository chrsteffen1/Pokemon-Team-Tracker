import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true 
  },
  alive: {type: Boolean, default: true},
  }, {
    timestamps: true,
  })

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export {
  Pokemon
}