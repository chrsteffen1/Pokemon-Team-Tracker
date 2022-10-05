import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()


router.post('/',gamesCtrl.create)
router.get('/new', isLoggedIn,  gamesCtrl.new)

export{
  router
}