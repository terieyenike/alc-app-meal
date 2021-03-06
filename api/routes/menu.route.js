import express from 'express'
import MenuController from '../controllers/menu.controller'

const router = express.Router()

router.get('/', MenuController.fetchAllMenus)
router.post('/', MenuController.addAMenu)

export default router
