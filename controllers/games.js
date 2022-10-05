import { Game } from '../models/game.js'
import { Profile } from '../models/profile.js'


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
  // .populate('meals')
  .then(game => {
    // Meal.find({_id: {$nin: flight.meals}})
    // .then(meals => {
      res.render('games/show', { 
        title: 'Game Details', 
        game,
      })    
    // })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
  console.log('HEY')
}

function createLog(req,res){
  Game.findById(req.params.id)
  .then(game => {
    console.log(req.body, 'HELLLO')
    game.logs.push(req.body)
    game.save()
    res.redirect(`/profiles/${Profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export{
  create,
  newGame as new,
  createLog,
  show,
}