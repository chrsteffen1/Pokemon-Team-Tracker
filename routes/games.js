import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()


router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/new', isLoggedIn,  gamesCtrl.new)
router.get('/:id', isLoggedIn, gamesCtrl.show)
router.post('/:id/logs', isLoggedIn, gamesCtrl.createLog)

export{
  router
}