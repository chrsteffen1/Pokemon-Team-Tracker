import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

router.post('/', isLoggedIn, pokemonCtrl.create)
router.get('/new', isLoggedIn,  pokemonCtrl.new)

export{
  router
}