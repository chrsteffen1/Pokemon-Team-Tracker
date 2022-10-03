import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()

router.get('/new', isLoggedIn, gamesCtrl.index)

export {
  router
}