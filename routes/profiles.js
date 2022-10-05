import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()


router.get('/', profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.delete('/:profileId/games/:gameId', isLoggedIn, profilesCtrl.delete)
router.put('/:profileId/games/:gameId', isLoggedIn, profilesCtrl.update)

// router.post('/:profileId/games/:gameId/pokemon', isLoggedIn, profilesCtrl.createPokemon)
// router.delete('/:profileId/games/:gameId/pokemon', isLoggedIn, profilesCtrl.deletePokemon)
router.post('/:id/games', isLoggedIn, profilesCtrl.addGame)





export {
  router
}