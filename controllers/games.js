import { Game } from '../models/game.js'


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

export{
  create,
  newGame as new,
}