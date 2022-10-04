import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
name: String,
alive: Boolean
}, {
  timestamps: true,
})

const Pokemon = mongoose.model('Pokemon', userSchema)

export {
  Pokemon
}