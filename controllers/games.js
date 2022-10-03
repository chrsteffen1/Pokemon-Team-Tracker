import { Game } from '../models/game.js'

function createGame(req,res){
  Game.findById(req.user.profile._id)
  .then(profile => {
      res.redirect(`/games/${req.game._id}`)
  })
  .catch(err => {
    console.log(err)
  })
}

function newGame(rew,res){
  res.render('games/new', {  
    title: 'Add Game'
  })
}

export {
  createGame,
  newGame as new,
}