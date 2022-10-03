import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()


router.get('/', profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/:id/games', isLoggedIn, profilesCtrl.createGame)
router.delete('/games/:id', isLoggedIn, profilesCtrl.delete)
router.get('/:profileId/games/:gameId/edit', isLoggedIn, profilesCtrl.edit)
router.put('/:profileId/games/:gameId', isLoggedIn, profilesCtrl.update)







export {
  router
}