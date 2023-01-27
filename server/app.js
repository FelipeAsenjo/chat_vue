import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { createServer } from 'http'

import v1Router from './src/v1/routes/index.js'
import { logErrors, errorHandler } from './src/middlewares/error.handler.js'
const app = express()

app.use(cors())
app.use(xss())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', v1Router)

app.use(logErrors)
app.use(errorHandler)

const server = createServer(app)

export default server