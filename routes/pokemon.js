import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

export{
  router
}