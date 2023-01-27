import express from 'express'
const router = express.Router()

import users from '../services/users/users.routes.js'
import auth from '../services/auth/auth.routes.js'

router.use('/login', auth)

export default router