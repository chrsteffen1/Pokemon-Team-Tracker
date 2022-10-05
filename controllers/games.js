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
      // const isSelf = profile._id.equals(req.user.profile._id)
      res.render('games/show', { 
        title: 'Game Details', 
        game,
        // isSelf,
      })    
    // })
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

export{
  create,
  newGame as new,
  createLog,
  show,
}