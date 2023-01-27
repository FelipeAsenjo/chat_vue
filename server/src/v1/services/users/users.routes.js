import express from 'express'
import UserController from './users.controllers.js'

const router = express.Router()
const controller = new UserController()


router.get('/', controller.findAll)

router.get('/:id', controller.findOne)

router.post('/', controller.create)

router.patch('/', controller.updateOne)

router.delete('/', controller.deleteOne)

export default router