import { Game } from '../models/game.js'
import { Pokemon } from '../models/pokemon.js'


function create(req,res){
  Game.create(req.body)
  .then(game => {
    res.redirect('games/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
  console.log('New game')
}

function newGame(req,res){
  Game.find({})
  .then(games => {
    res.render('games/new', {
      title: 'Add Game',
      games,
    })
  })
}

function show(req,res){
  Game.findById(req.params.id)
  .populate('pokemon')
  .then(game => {
    Pokemon.find({_id: {$nin: game.pokemon}})
    .then(pokemon => {
      res.render('games/show', { 
        title: 'pokemon', 
        game,
        pokemon,
      })    
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createLog(req,res){
  Game.findById(req.params.id)
  .then(game => {
    console.log(req.body, 'HELLLO')
    game.logs.push(req.body)
    game.save()
    .then(()=> {
      res.redirect(`/games/${game._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addPokemon(req,res){
  req.body.alive = !!req.body.alive
  Game.findById(req.params.id)
  .then(game => {
    game.pokemon.push(req.body.pokemonId)
    game.save()
		.then(() => {
      res.redirect(`/games/${game._id}`)
		})
  })
}

function deletePokemon(req, res) {
  Game.findById(req.params.gameId)
  .then(game => {
    console.log('AHHHHH')
    game.pokemon.remove(req.params.pokemonId)
    game.save()
    .then(()=> {
      res.redirect(`/games/${game._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

export{
  create,
  newGame as new,
  createLog,
  show,
  addPokemon,
  deletePokemon,
}