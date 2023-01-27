import express from 'express'
import AuthController from './auth.controllers.js'

const router = express.Router()
const controller = new AuthController()


router.post('/', controller.login)

export default router