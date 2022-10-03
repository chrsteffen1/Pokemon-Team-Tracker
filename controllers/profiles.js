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



export {
  index,
  show,
}