import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true 
  },
  alive: Boolean
  }, {
    timestamps: true,
  })

const Pokemon = mongoose.model('Pokemon', userSchema)

export {
  Pokemon
}