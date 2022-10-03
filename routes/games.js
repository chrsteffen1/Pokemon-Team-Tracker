import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()

router.post('/', isLoggedIn, gamesCtrl.createGame)
router.get('/new', gamesCtrl.new)

export {
  router
}