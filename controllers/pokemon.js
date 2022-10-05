import { Pokemon } from '../models/pokemon.js'


function create(req,res){
  Pokemon.create(req.body)
  .then(mon => {
    res.redirect('pokemon/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
  console.log('New game')
}

function newPokemon(req,res){
  Pokemon.find({})
  .then(pokemon => {
    res.render('pokemon/new', {
      title: 'Add Pokemon',
      pokemon,
    })
  })
}

export{
  create,
  newPokemon as new,
}