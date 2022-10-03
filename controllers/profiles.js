import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'


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
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render("profiles/show", {
      title: `${profile.name}`,
      profile,
      isSelf,
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/profiles")
  })
}

function createGame(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.games.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function deleteGame(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.games.remove({_id: req.params.id})
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

function edit(req,res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render("profiles/edit", {
      profile,
      title: 'Edit game'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  show,
  createGame,
  deleteGame as delete,
  edit,
}