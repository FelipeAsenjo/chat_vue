import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { createServer } from 'http'

const app = express()

app.use(cors())
app.use(morgan('dev'))


const server = createServer(app)

export default server