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
  Profile.findById(req.params.profileId)
  .then(profile => {
    const game = profile.games.id(req.params.gameId)
    res.render("profiles/edit", {
      profile,
      game,
      title: 'Edit game'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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

function createLog(req,res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    const game = profile.games.id(req.params.gameId)
    console.log(req.body, "HEY LOOK AT ME")
    console.log(game, "YOU NEED THIS")
    game.logs.push(req.body)
    profile.save()
    console.log(profile, "PROFILE")
    res.redirect(`/profiles/${profile._id}`)
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
  update,
  createLog,
}