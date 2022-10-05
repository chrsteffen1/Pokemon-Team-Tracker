import { Game } from '../models/game.js'
import { Profile } from '../models/profile.js'


function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
			title: "profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('games')
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    Game.find({_id: {$nin: profile.games}})
    .then(games => {
    res.render("profiles/show", {
      title: `${profile.name}`,
      profile,
      games,
      isSelf,
    })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/profiles")
  })
}

function deleteGame(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    profile.games.remove(req.params.gameId)
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



function update(req,res){
  Profile.findById(req.params.profileId)
  .then(profile => {
    const game = profile.games.id(req.params.gameId)
    for(const prop in req.body){
      console.log(prop, "AHHHHHH")
      game[prop]=req.body[prop]
    }
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



function createPokemon(req,res){
  console.log(req.body)
  Profile.findById(req.user.profile._id)
  .then(profile => {
    const game = profile.games.id(req.params.gameId)
    game.pokemon.push(req.body)
    profile.save()
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deletePokemon(req,res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    const game = profile.games.id(req.params.gameId)
    game.pokemon.remove({_id: req.params.id})
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function addGame(req,res){
  Profile.findById(req.params.id)
  .then(profile => {
    console.log(profile.games, "HIIII")
    profile.games.push(req.body.gameId)
    profile.save()
		.then(() => {
      console.log(profile.games)
      res.redirect(`/profiles/${profile._id}`)
		})
  })
}

export {
  index,
  show,
  // createGame,
  deleteGame as delete,
  update,
  createPokemon,
  deletePokemon,
  addGame
}